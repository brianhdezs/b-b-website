import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, typology, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Por favor complete todos los campos obligatorios (nombre, correo y mensaje).' },
        { status: 400 }
      );
    }

    const targetEmail = process.env.CONTACT_EMAIL || 'brianhdez824@gmail.com';

    // Envío seguro hacia FormSubmit
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `Nueva solicitud de proyecto: ${name} [${typology || 'Residencial'}]`,
        _template: 'table',
        _captcha: 'false',
        _replyto: email,
        Nombre: name,
        'Correo electrónico': email,
        'Teléfono / WhatsApp': phone || 'No especificado',
        'Tipo de Proyecto': typology || 'Residencial',
        'Descripción del Proyecto': message,
      }),
    });

    const data = await response.json();

    if (response.ok && (data.success === 'true' || data.success === true)) {
      return NextResponse.json({ success: true, message: 'Mensaje enviado exitosamente' });
    }

    return NextResponse.json(
      { error: data.message || 'No se pudo procesar el envío del correo.' },
      { status: response.status || 500 }
    );
  } catch (error) {
    console.error('Error al procesar solicitud de contacto:', error);
    return NextResponse.json(
      { error: 'Error de conexión al enviar el correo. Por favor intente más tarde.' },
      { status: 500 }
    );
  }
}

