import React from "react";
import { RadioGroup } from "@/components/ui/radio-group";
import Input from "@/app/components/form/input/Input";
import Dropdown, {
  DropdownOptions
} from "@/app/components/form/dropdown/Dropdown";
import Textarea from "@/app/components/form/text-area/Textarea";
import CheckBox from "@/app/components/form/check-box/CheckBox";
import {
  RadioButtonXL,
  SimpleRadioButton
} from "@/app/components/form/radio-button/RadioButton";
import Text from "@/app/components/ui/typography/Typography";
const loveIcon = "/images/icons/love.svg";

const options: DropdownOptions[] = [
  { value: "Value 1", label: "Value 1" },
  { value: "Value 2", label: "Value 2" },
  { value: "Value 3", label: "Value 3" },
  { value: "Value 4", label: "Value 4" }
];

const Playground = () => {
  return (
    <div className=" flex flex-col gap-4  p-10 max-w-5xl mx-auto bg-[#F4F0F0]">
      {/* Simple Radio Button */}
      <input type="checkbox" />

      <div className="mt-10 bg-gray-100 p-10">
        <Input type="email" placeholder="Contraseña" variant="newsletter" />
      </div>

      {/* Radio Button XL Starts  */}
      <Text variant="title" tag="h4">
        Radio Button XL
      </Text>
      <RadioGroup className=" grid grid-cols-2 gap-5" defaultValue="radio1">
        <div className="bg-[#1a9eda] p-5  flex flex-col gap-4">
          <Text variant="para-l" color="white" tag="p">
            Unchecked
          </Text>
          <RadioButtonXL variant="azul-xl" id="radio1" title="Mail" />
          <Text variant="para-l" color="white" tag="p">
            Checked
          </Text>
          <RadioButtonXL
            variant="azul-xl"
            icon={loveIcon}
            checked
            id="radio2"
            title="Llamada"
          />
        </div>
        <div className="bg-white p-5  flex flex-col gap-4">
          <Text variant="para-l" tag="p">
            Unchecked
          </Text>
          <RadioButtonXL id="radio4" title="SMS" />
          <Text variant="para-l" tag="p">
            Checked
          </Text>
          <RadioButtonXL id="radio3" title="SMS" checked />
        </div>
      </RadioGroup>
      {/* Radio Button XL Ends */}

      {/* =================================== */}
      {/* CheckBox Starts */}
      <Text variant="title" tag="h2">
        CheckBoxs
      </Text>
      <div className=" grid grid-cols-2 gap-5">
        <div className="bg-[#1a9eda] py-20 px-28 flex flex-col gap-4">
          <CheckBox varient="azul" label="Test checkbox" />
        </div>
        <div className="bg-[#1a9eda] py-20 px-28 flex flex-col gap-4">
          <CheckBox varient="azul" label="Test checkboxs" />
        </div>
        <div className="bg-white py-20 px-28 flex flex-col gap-4">
          <CheckBox label="Default Checkbox" />
        </div>
        <div className="bg-white py-20 px-28 flex flex-col gap-4">
          <CheckBox label="Default CheckBoxs" />
        </div>
      </div>
      {/* CheckBox Ends */}

      {/* RadioButton Starts */}
      <Text variant="title" tag="h2">
        Radio Button
      </Text>

      <RadioGroup className=" grid grid-cols-2 gap-5" defaultValue="radio1">
        <div className="bg-[#1a9eda] py-20 px-28 flex flex-col gap-4">
          <SimpleRadioButton
            variant="azul"
            title="Default Radio Button"
            id="1"
          />
        </div>
        <div className="bg-[#1a9eda] py-20 px-28 flex flex-col gap-4">
          <SimpleRadioButton
            variant="azul"
            title="Default Radio Button"
            id="2"
          />
        </div>
        <div className="bg-white py-20 px-28 flex flex-col gap-4">
          <SimpleRadioButton title="Default Radio Button" id="3" />
        </div>
        <div className="bg-white py-20 px-28 flex flex-col gap-4">
          <SimpleRadioButton title="Default Radio Button" id="4" />
        </div>
      </RadioGroup>
      {/*=========================================  */}
      {/* Select / Dropdown Starts */}
      <Text variant="title" tag="h4">
        Drop Down / Select
      </Text>
      <div className="grid grid-cols-2 gap-2 gap-y-28 bg-white mb-8">
        <div className="bg-white p-5 ">
          <Dropdown options={options} placeHolder="Provincia" />
        </div>
        <div className="bg-white p-5">
          <Dropdown options={options} placeHolder="Provincia" />
        </div>
        <div className="bg-white p-5">
          <Dropdown options={options} placeHolder="Provincia" error />
        </div>
        <div className="bg-[#1A9EDA] p-5 ">
          <Dropdown options={options} placeHolder="Provincia" variant="azul" />
        </div>
        <div className="bg-[#1A9EDA] p-5 ">
          <Dropdown options={options} placeHolder="Provincia" variant="azul" />
        </div>
        <div className="bg-[#1A9EDA] p-5 ">
          <Dropdown
            options={options}
            placeHolder="Provincia"
            error
            variant="azul"
          />
        </div>
      </div>
      {/* Select / Dropdown Ends*/}
      {/* ======================= */}
      {/* Text Inputs Starts */}
      <Text variant="title" tag="h4">
        Text Inputs
      </Text>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-5">
          <div className="p-5 py-9 bg-white ">
            <Input
              type="text"
              placeholder="Nombre de la empresa"
              variant="simple"
            />
          </div>
          <div className="p-5 py-9 bg-[#1a9eda]">
            <Input
              type="text"
              color="azul"
              placeholder="Nombre de la empresa"
              variant="simple"
            />
          </div>
          {/* Error */}
          {/* <div className="p-5 py-9 bg-white">
            <Input
              type="text"
              placeholder="Nombre de la empresa"
              variant="simple"
              error
            />
          </div>
          <div className="p-5 py-9 bg-[#1a9eda]">
            <Input
              type="text"
              color="azul"
              placeholder="Nombre de la empresa"
              variant="simple"
              error
            />
          </div> */}
        </div>

        <Input type="email" placeholder="Email" variant="simple" />
        <Input
          type="password"
          placeholder="****************"
          variant="simple"
        />
        {/* Text Area */}
        {/* <Textarea /> */}
      </div>
      {/* Text Inputs Ends */}
      {/* Text Inputs StartsEnds */}
    </div>
  );
};

export default Playground;
