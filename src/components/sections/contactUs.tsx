export default function ContactUs() {
  return (
    <div className="bg-black font-small text-white text-sm items-center pt-4 pb-28 border-b border-white">
      <div className="max-w-[80%] mx-auto flex items-start justify-between">
        <div>
          <div className="mb-4 font-bold text-lg">Newsletter</div>
          <ul className="space-y-4">
            <li>
              Sign up to be the first to know about drops, special offers and
              more.
            </li>
            <li>I'm interested in:</li>
          </ul>
        </div>
        <div className="flex grid-cols-4 gap-44">
          <div>
            <div className="mb-4 font-bold">AfroVibe</div>
            <ul className="flex flex-col space-y-4">
              <li>Join the movement</li>
              <li>Careers</li>
              <li>Stores</li>
            </ul>
          </div>
          <div>
            <div className="mb-4 font-bold">Get Help</div>
            <ul className="flex flex-col space-y-4">
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Payment</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <div className="mb-4 font-bold">Legal</div>
            <ul className="flex flex-col space-y-4">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Disclaimer</li>
              <li>Warranty and Returns Agreement</li>
            </ul>
          </div>
          <div>
            <div className="mb-4">Social</div>
            <ul className="flex flex-col space-y-4">
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instragrm</li>
              <li>Tiktok</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
