import React from "react";

const SpecificationTable: React.FC = () => {
  return (
    <div className="max-w-xl mt-4 text-sm">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-[#a6a6a6]">
          <tr>
            <th className="px-4 py-[0.25rem] text-center">FEATURE</th>
            <th className="px-4 py-[0.25rem] text-left">SPECIFICATION</th>
          </tr>
        </thead>
        <tbody className="font-montserrat">
          <tr>
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-[#f5f5f5] hover:bg-gray-200 transition-colors duration-200">
              Speed
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7] hover:bg-gray-200 transition-colors duration-200">
              180 Cups / min
            </td>
          </tr>
          <tr>
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-[#f5f5f5] hover:bg-gray-200 transition-colors duration-200">
              Paper Specifications
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7] hover:bg-gray-200 transition-colors duration-200">
              170 - 380 GSM
            </td>
          </tr>
          <tr>
            <td className="px-[1.6rem] text-center py-[0.10rem] bg-[#f5f5f5] hover:bg-gray-200 transition-colors duration-200">
              Raw Materials
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7] hover:bg-gray-200 transition-colors duration-200">
              Single or Double PE/PLA Coated Paper
            </td>
          </tr>
          <tr>
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-[#f5f5f5] hover:bg-gray-200 transition-colors duration-200">
              Cup Size
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7] hover:bg-gray-200 transition-colors duration-200">
              2.5 - 26 oz
            </td>
          </tr>
          <tr>
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-[#f5f5f5] hover:bg-gray-200 transition-colors duration-200">
              Cup Top Dia (TD)
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7] hover:bg-gray-200 transition-colors duration-200">
              60 - 95 mm
            </td>
          </tr>
          <tr>
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-[#f5f5f5] hover:bg-gray-200 transition-colors duration-200">
              Cup Height (H)
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7] hover:bg-gray-200 transition-colors duration-200">
              50 - 135 mm
            </td>
          </tr>
          <tr>
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-[#f5f5f5] hover:bg-gray-200 transition-colors duration-200">
              Cup Bottom Dia (RB)
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7] hover:bg-gray-200 transition-colors duration-200">
              40 - 75 mm
            </td>
          </tr>
          <tr>
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-[#f5f5f5] hover:bg-gray-200 transition-colors duration-200">
              Cup Knurling Depth (KD)
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7] hover:bg-gray-200 transition-colors duration-200">
              3.5 - 10 mm
            </td>
          </tr>
          <tr>
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-[#f5f5f5] hover:bg-gray-200 transition-colors duration-200">
              Voltage
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7] hover:bg-gray-200 transition-colors duration-200">
              3 Phase | 380 V; 50 Hz
            </td>
          </tr>
          <tr>
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-[#f5f5f5] hover:bg-gray-200 transition-colors duration-200">
              Total Power
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7] hover:bg-gray-200 transition-colors duration-200">
              35 kW
            </td>
          </tr>
          <tr>
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-[#f5f5f5] hover:bg-gray-200 transition-colors duration-200">
              Weight
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7] hover:bg-gray-200 transition-colors duration-200">
              3500 Kg
            </td>
          </tr>
          <tr>
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-[#f5f5f5] hover:bg-gray-200 transition-colors duration-200">
              Dimensions
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7] hover:bg-gray-200 transition-colors duration-200">
              3700 x 1520 x 1940 mm
            </td>
          </tr>
          <tr>
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-[#f5f5f5] hover:bg-gray-200 transition-colors duration-200">
              Air Pressure
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7] hover:bg-gray-200 transition-colors duration-200">
              0.6 - 0.8 Mpa
            </td>
          </tr>
          <tr>
            <td className="px-[1.6rem] text-center py-[0.25rem] bg-[#f5f5f5] hover:bg-gray-200 transition-colors duration-200">
              Air Flow Rate
            </td>
            <td className="px-7 py-[0.25rem] text-center bg-[#d7d7d7] hover:bg-gray-200 transition-colors duration-200">
              30 CFM
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SpecificationTable;
