import Image from "next/image";
import Bowl from "../../../public/assets/bowl.png";

export default function DetaillProcess() {
  return (
    <div className="w-full  py-8">
      <div className="flex flex-col md:flex-row">
        {/* Left side content */}
        <div className="md:w-[55%] bg-white shadow-lg h-full rounded-3xl p-4 pr-4">
          <div className="z-20 font-poppins">
            {" "}
            <span className="z-20">Process of</span>{" "}
            <span className="text-red-500 font-semibold ">Cup Formation</span>
          </div>

          <div className="mb-4">
            <h2 className="text-sm text-[#483d78]  mb-2">
              1. Raw material – Paper roll
            </h2>
            <p className="text-sm font-poppins">
              First of all, the paper used to make the paper container must be
              food-grade paper. Then, carry out the process of laminating.
              Coating the material that can resist oil and water before the
              subsequent forming steps.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-sm text-[#483d78]  mb-2">2. Printing</h2>
            <p className="text-sm font-poppins">
              After the lamination treatment, we will print the desired pattern
              and color on the paper roll. The patterns can be divided into 3
              methods: gravure, convex plate, and flat plate. The cost also
              grades into high, and it is more vastly used. Afterward, printing
              is continuously printed on paper rolls, and the required printing
              volume is large, lithographic printing in which paper is cut into
              pieces and then printed is suitable for making small quantities of
              products. After this is finished, the first layer of water-based
              treatment will be printed as protection. According to your needs,
              you can print your company logo and contact information on the
              cup.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-sm text-[#483d78]  mb-2">3. Cutting</h2>
            <p className="text-sm font-poppins">
              After printing, we will cut the paper roll according to the paper
              cup size. The printed paper enters the thin knife and produces a
              fan-shaped piece of paper, which is the unfolded shape of the wall
              of the paper cup. Then the fan-shaped paper is collected and sent
              to the forming machine.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-sm text-[#483d78]  mb-2">4. Forming</h2>
            <p className="text-sm font-poppins">
              In making a paper cup, we need to make the cup’s body and the
              cup’s bottom. The cup body uses the paper fan-shaped sheet. The
              bottom of the disposable paper cup is to cut out paper rolls of
              different specifications.
            </p>
            <p className="text-sm font-poppins">
              The paper body is then rolled up and made into the shape of a
              paper cup. At the same time, the molding provides heat at the seam
              of the paper so that the first is firmly adhered, the cup wall is
              made crack-proof, and the bottom of the paper cup fits that shape.
              Immediately after the mold pastes the mouth of the cup, the paper
              at the mouth of the cup is rolled down and fixed by heat to form
              the rim of the paper cup. These forming steps can be completed in
              one second.
            </p>
          </div>
        </div>

        {/* Right side images */}
        <div className="md:w-[45%] pl-4 grid  grid-cols-4 gap-4">
          {[
            { src: Bowl, alt: "Paper Roll", label: "Paper Roll" },
            {
              src: Bowl,
              alt: "Flexo Printing Machine",
              label: "Flexo Printing Machine",
            },
            {
              src: Bowl,
              alt: "Printed Paper Roll",
              label: "Printed Paper Roll",
            },
            {
              src: Bowl,
              alt: "Die Cutting Machine",
              label: "Die Cutting Machine",
            },
            { src: Bowl, alt: "Paper Cups", label: "Paper Cups" },
            { src: Bowl, alt: "Paper Cup Machine", label: "Paper Cup Machine" },
            { src: Bowl, alt: "Bottom Paper Roll", label: "Bottom Paper Roll" },
            { src: Bowl, alt: "Paper Cup Form", label: "Paper Cup Form" },
            {
              src: Bowl,
              alt: "Paper Cup Packing Machine",
              label: "Paper Cup Packing Machine",
            },
            {
              src: Bowl,
              alt: "Paper Cup Packing Bag",
              label: "Paper Cup Packing Bag",
            },
          ].map((item, index) => (
            <div key={index} className="text-center bg-white shadow-lg">
              <div className="">
                <p className="mt-2">{item.label}</p>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={100}
                  height={100}
                  className="mx-auto mt-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
