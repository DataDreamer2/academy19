import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, program, message } = req.body;

  try {
    // 1. Send notification to Academy19
    const notification = await resend.emails.send({
      from: 'Academy19 <noreply@academy19.it>',
      to: ['info@academy19.it'],
      subject: `Nuova Iscrizione/Richiesta: ${name} - ${program}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #00FF00; text-transform: uppercase;">Nuovo Lead Academy19</h2>
          <hr />
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${phone}</p>
          <p><strong>Interesse:</strong> ${program}</p>
          <p><strong>Messaggio:</strong><br />${message.replace(/\n/g, '<br />')}</p>
          <hr />
          <p style="font-size: 12px; color: #888;">Email inviata automaticamente dal sito www.academy19.it</p>
        </div>
      `,
    });

    // 2. Send confirmation to the user
    const confirmation = await resend.emails.send({
      from: 'Academy19 <info@academy19.it>',
      to: [email],
      subject: `Conferma Ricezione Richiesta Academy19 - ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #00FF00; text-transform: uppercase;">Grazie per averci contattato!</h2>
          <p>Ciao <strong>${name}</strong>,</p>
          <p>Abbiamo ricevuto la tua richiesta per il programma: <strong>${program}</strong>.</p>
          <p>Il nostro staff ti risponderà il prima possibile per fornirti tutti i dettagli e confermare l'eventuale prova gratuita.</p>
          <br />
          <p>A presto in campo!</p>
          <p><strong>Team Academy19</strong></p>
          <hr />
          <p style="font-size: 11px; color: #888;">
            Academy19 - Campus di Formazione Calcistica d'Eccellenza<br />
            Sede Forlì | Sede Città di Castello<br />
            <a href="https://www.academy19.it" style="color: #00FF00;">www.academy19.it</a>
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, notificationId: notification.data?.id, confirmationId: confirmation.data?.id });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
