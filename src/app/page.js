import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <main className="w-full max-w-4xl px-8 py-16 md:py-24 bg-white dark:bg-black shadow-sm">
        {/* Header */}
        <header className="mb-12">
          
          <h1 className="text-4xl font-bold tracking-tight mb-2">Terms & Conditions</h1>
          <p className="text-zinc-500">Please read these terms carefully before using our services.</p>
        </header>

        {/* Terms Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 whitespace-pre-wrap leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            <strong className="block text-xl text-zinc-950 dark:text-zinc-50 mb-2">1 . Introduction</strong>
            These Terms & Conditions govern the access to and use of the food delivery platform operated by the Company (“Platform” or “App”). By registering, accessing, or placing an order through the App, the customer (“User” or “Customer”) agrees to be legally bound by these Terms & Conditions, the Privacy Policy, and any other policies published on the Platform from time to time. The Company acts solely as a technology platform that facilitates discovery of restaurants, order placement, payment processing, and delivery coordination, and does not prepare, own, or sell food items. If the Customer does not agree to these Terms & Conditions, the Customer must discontinue use of the App immediately.
          </p>

          <p>
            <strong className="block text-xl text-zinc-950 dark:text-zinc-50 mb-2">2 . Eligibility</strong>
            To access or use the Platform, the Customer must be at least 18 years of age and legally capable of entering into a binding contract under the Indian Contract Act, 1872. By registering on or using the App, the Customer represents and warrants that all information provided is true, accurate, and complete, and that the Customer is using the Platform for personal and lawful purposes only. The Company reserves the right to suspend or terminate access to the Platform if a Customer is found to be ineligible, provides false information, or violates these Terms & Conditions or any applicable laws.
          </p>

          <p>
            <strong className="block text-xl text-zinc-950 dark:text-zinc-50 mb-2">3 . Account Registration</strong>
            To use certain features of the Platform, the Customer may be required to create an account by providing accurate, complete, and up-to-date information, including a valid mobile number and other details as required. The Customer is solely responsible for maintaining the confidentiality of their account credentials and for all activities carried out through their account. The Customer agrees to notify the Company immediately of any unauthorized use or security breach of their account. The Company reserves the right to verify account information, suspend or terminate accounts, or restrict access to the Platform if any information provided is found to be false, misleading, or in violation of these Terms & Conditions
          </p>

          <p>
            <strong className="block text-xl text-zinc-950 dark:text-zinc-50 mb-2">4 . Placing Orders</strong>
            Customers may place food orders through the Platform from listed restaurants, subject to availability, operating hours, and acceptance by the respective restaurant. By placing an order, the Customer confirms that all order details, including items, quantities, delivery address, and contact information, are accurate and complete. Prices, applicable taxes (including GST), delivery charges will be displayed at the time of checkout, and the Customer agrees to pay the total amount shown. Order confirmation does not guarantee preparation or delivery and may be canceled or rejected by the restaurant or the Company due to unavailability, operational issues, or suspected misuse or fraud.By placing an order through the Platform, the Customer agrees that all orders are final and confirmed upon successful submission and acceptance by the Restaurant Partner. Once an order is placed, it cannot be cancelled, modified, except where expressly permitted under the Platform’s policies. Delivery timelines shown on the App are estimated only and may vary due to traffic conditions, weather, restaurant preparation time, operational issues, or other factors beyond the Company’s reasonable control. In the event of a delay in delivery, the Customer agrees to cooperate and allow reasonable additional time for completion of delivery. The Customer acknowledges that delays in delivery shall not constitute a deficiency of service, and to the maximum extent permitted by applicable law, the Customer agrees not to initiate any criminal complaints, FIRs, or legal proceedings solely on the grounds of delivery delay. Any concerns relating to delayed delivery must be raised only through the Platform’s customer support mechanism for review and resolution.
          </p>

          <p>
            <strong className="block text-xl text-zinc-950 dark:text-zinc-50 mb-2">5 . Payments</strong>
            All payments made by the Customer through the Platform are final and subject to the Company’s payment, cancellation, and refund policies as displayed in the App. The total payable amount may include food price, applicable taxes, delivery charges, platform fees, surge fees (if any), and other charges shown at checkout. Payments are processed through third-party payment gateways, and the Company is not responsible for delays or failures caused by such gateways. In the event an order is cancelled due to reasons including restaurant unavailability, operational issues, or circumstances beyond the Company’s control, any eligible refund shall be processed as per the App’s refund policy and within 6 to 7 working days. The Customer agrees to cooperate patiently in such situations and acknowledges that delays, cancellations, or refund processing issues do not give rise to any criminal complaint, FIR, or legal proceedings against the Company, its directors, employees, delivery partners, or restaurant partners, except as expressly required under applicable law. The Customer’s sole remedy shall be limited to the refund or resolution provided under the Platform’s policies.
          </p>

          <p>
            <strong className="block text-xl text-zinc-950 dark:text-zinc-50 mb-2">6 . Customer Responsibilities</strong>
            The Customer agrees to use the Platform in a lawful, responsible, and respectful manner. The Customer shall provide accurate and complete information, including delivery address, contact details, and payment information, and ensure availability at the delivery location to receive the order. The Customer agrees to behave courteously toward restaurant staff, delivery partners, and customer support personnel and shall not engage in abusive, threatening, fraudulent, or unlawful conduct. The Customer shall promptly review orders upon delivery and report any genuine issues through the Platform within the prescribed time. The Customer acknowledges that delays, cancellations, or service disruptions may occur due to factors beyond the Company’s control and agrees to cooperate patiently in such situations. Misuse of the Platform, false complaints, chargeback abuse, or violation of these Terms may result in suspension or termination of the Customer’s account, without prejudice to the Company’s other legal rights.
          </p>

          <p>
            <strong className="block text-xl text-zinc-950 dark:text-zinc-50 mb-2">7 . Use of the App</strong>
            The Customer agrees to use the Platform only for lawful purposes and in accordance with these Terms & Conditions. The Customer shall not misuse the App, including but not limited to creating fake accounts, placing fraudulent orders, providing false information, attempting unauthorized access, disrupting the Platform’s functionality, or engaging in any activity that violates applicable laws or regulations. The Customer shall not use the App to harass, abuse, threaten, or harm the Company, Restaurant Partners, Delivery Partners, or other users. All content, software, trademarks, logos, and intellectual property available on the App are owned by or licensed to the Company, and the Customer shall not copy, modify, distribute, or exploit any part of the App without prior written consent. The Company reserves the right to suspend or terminate access to the App if the Customer violates these Terms, misuses the Platform, or engages in unlawful or harmful conduct.
          </p>

          <p>
            <strong className="block text-xl text-zinc-950 dark:text-zinc-50 mb-2">8 . Limitation of Liability</strong>
            To the maximum extent permitted under applicable law, the Company shall not be liable for any delays, non-delivery, cancellation, errors, or deficiencies arising due to factors beyond its reasonable control, including but not limited to restaurant delays, delivery partner availability, traffic conditions, weather conditions, technical issues, or force majeure events. The Company acts solely as a technology platform facilitating order placement, payment processing, and delivery coordination, and does not prepare, package, or sell food items. In no event shall the Company’s total liability to a Customer exceed the total amount paid by the Customer for the specific order giving rise to the claim. The Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profit, loss of business, or personal inconvenience. Nothing in these Terms shall limit liability to the extent such limitation is prohibited under applicable law.
          </p>

          <p>
            <strong className="block text-xl text-zinc-950 dark:text-zinc-50 mb-2">9 . Dispute Resolution</strong>
            In the event of any dispute, complaint, or claim arising out of or relating to the use of the Platform, placement or delivery of orders, payments, cancellations due to operational reasons, or services provided through the App, the Customer agrees to first attempt to resolve the dispute amicably by contacting the Company’s customer support through the App. The Customer acknowledges that delays in delivery, order cancellations due to restaurant unavailability, delivery partner issues, traffic, weather, or technical reasons are operational matters and do not constitute criminal acts. Accordingly, the Customer agrees not to initiate any criminal complaint, FIR, or coercive legal action solely on account of delivery delays or order cancellation. If the dispute is not resolved through customer support within a reasonable time, it shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996, conducted by a sole arbitrator appointed by the Company.
          </p>

          <p>
            <strong className="block text-xl text-zinc-950 dark:text-zinc-50 mb-2">10 . Amendments</strong>
            The Company reserves the right to modify, update, or amend these Terms & Conditions at any time at its sole discretion. The Company is not obligated to provide individual notifications or alerts regarding such amendments. It is the Customer’s responsibility to periodically review the Terms & Conditions available on the Platform to stay informed of any changes. Continued access to or use of the Platform after any amendments are made shall constitute the Customer’s deemed acceptance of the revised Terms & Conditions.
          </p>
        </div>

        <footer className="mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}