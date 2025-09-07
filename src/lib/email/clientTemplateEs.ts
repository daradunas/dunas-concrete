const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ""

export function generateClientConfirmationEmailEs(body: QuoteEmailBody) {
  const productsHtml = body.selectedProducts
    .map(
      (p) => `
        <tr>
          <td style="padding: 8px; border: 1px solid #e2e8f0;">${p.quantity}</td>
          <td style="padding: 8px; border: 1px solid #e2e8f0;">${p.unit}</td>
          <td style="padding: 8px; border: 1px solid #e2e8f0;">${p.name}</td>
          <td style="padding: 8px; border: 1px solid #e2e8f0;">${p.colorName || "N/A"}</td>
          <td style="padding: 8px; border: 1px solid #e2e8f0;">${p.psi} psi</td>
        </tr>`
    )
    .join("")

  return `
  <html>
    <body style="font-family: Arial, sans-serif; background: #ffffff; color: #1e293b; margin: 0; padding: 0;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff; max-width: 600px; margin: auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
        
        <!-- Header -->
        <tr>
          <td style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 24px; text-align: center;">
            <h1 style="color: #f4c03b; margin: 0; font-size: 24px;">Solicitud de Cotización Recibida</h1>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding: 24px;">
            <p>Hola <strong>${body.contactInformation.name}</strong>,</p>
            <p>Hemos recibido tu solicitud de cotización y nuestro equipo se pondrá en contacto contigo muy pronto.</p>
          </td>
        </tr>

        <!-- Products -->
        <tr>
          <td style="padding: 24px;">
            <h2 style="margin-top: 0; color: #1e293b;">Tus Productos Solicitados</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 14px;">
              <thead>
                <tr style="background: #f4c03b; color: #1e293b;">
                  <th style="padding: 8px; border: 1px solid #e2e8f0;">Cant.</th>
                  <th style="padding: 8px; border: 1px solid #e2e8f0;">Unidad</th>
                  <th style="padding: 8px; border: 1px solid #e2e8f0;">Nombre</th>
                  <th style="padding: 8px; border: 1px solid #e2e8f0;">Color</th>
                  <th style="padding: 8px; border: 1px solid #e2e8f0;">PSI</th>
                </tr>
              </thead>
              <tbody>
                ${productsHtml}
              </tbody>
            </table>
            <p style="margin-top: 12px;"><strong>Ciudad de entrega:</strong> ${body.deliveryDetails.city}</p>
          </td>
        </tr>

        <!-- Seguir Cotizando -->
        <tr>
          <td style="padding: 24px; text-align: center;">
            <hr style="margin:20px 0;border:none;border-top:1px solid #ddd" />
            <p style="font-size:14px;color:#555; margin:0;">
              ¿Quieres seguir cotizando?  
              <a href="${baseUrl}/quote" target="_blank" 
                style="color:#007BFF;text-decoration:none;font-weight:bold;">
                Haz clic aquí para continuar tu cotización
              </a>
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background: #f4c03b; text-align: center; padding: 16px;">
            <p style="margin: 0; font-size: 14px; color: #1e293b;">
              © ${new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
            </p>
          </td>
        </tr>

      </table>
    </body>
  </html>
  `
}