export function generateQuoteEmail(body: QuoteEmailBody) {
  const productsHtml = body.selectedProducts
    .map(
      (p: CartItem) => `
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
            <h1 style="color: #f4c03b; margin: 0; font-size: 24px;">New Quote Request</h1>
          </td>
        </tr>

        <!-- Contact Info -->
        <tr>
          <td style="padding: 24px;">
            <h2 style="margin-top: 0; color: #1e293b;">Contact Information</h2>
            <p><strong>Name:</strong> ${body.contactInformation.name}</p>
            <p><strong>Email:</strong> ${body.contactInformation.email}</p>
            <p><strong>Phone:</strong> ${body.contactInformation.phone}</p>
            <p><strong>Company:</strong> ${body.contactInformation.company}</p>
            <p><strong>Address:</strong> ${body.contactInformation.address}</p>
            <p><strong>City:</strong> ${body.deliveryDetails.city}</p>
            <p><strong>Project Type:</strong> ${body.contactInformation.projectType}</p>
            <p><strong>Delivery Date:</strong> ${body.contactInformation.deliveryDate}</p>
            <p><strong>Notes:</strong> ${body.contactInformation.notes || "None"}</p>
          </td>
        </tr>

        <!-- Products -->
        <tr>
          <td style="padding: 24px;">
            <h2 style="margin-top: 0; color: #1e293b;">Products</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 14px;">
              <thead>
                <tr style="background: #f4c03b; color: #1e293b;">
                  <th style="padding: 8px; border: 1px solid #e2e8f0;">Qty</th>
                  <th style="padding: 8px; border: 1px solid #e2e8f0;">Unit</th>
                  <th style="padding: 8px; border: 1px solid #e2e8f0;">Name</th>
                  <th style="padding: 8px; border: 1px solid #e2e8f0;">Color</th>
                  <th style="padding: 8px; border: 1px solid #e2e8f0;">PSI</th>
                </tr>
              </thead>
              <tbody>
                ${productsHtml}
              </tbody>
            </table>
            <p style="margin-top: 12px;"><strong>Delivery Distance:</strong> ${body.deliveryDetails.distanceFromLA} miles</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background: #f4c03b; text-align: center; padding: 16px;">
            <p style="margin: 0; font-size: 14px; color: #1e293b;">
              © ${new Date().getFullYear()} Las Dunas Concrete. All rights reserved.
            </p>
          </td>
        </tr>

      </table>
    </body>
  </html>
  `
}
