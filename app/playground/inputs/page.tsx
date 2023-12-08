import React from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Input from "@/app/components/form/input/Input";
import Dropdown, {
  DropdownOptions,
} from "@/app/components/form/dropdown/Dropdown";
import Textarea from "@/app/components/form/text-area/Textarea";
import Form from "./Form";
import CheckBox from "@/app/components/form/check-box/CheckBox";
import {
  ParaL,
  Title,
  TitleS,
} from "@/app/components/ui/typography/Typography";
import {
  RadioButtonXL,
  SimpleRadioButton,
} from "@/app/components/form/radio-button/RadioButton";

const loveIcon = "/images/icons/love.svg";

const options: DropdownOptions[] = [
  { value: "flir", label: "FLIR" },
  { value: "flirOnePro", label: "FLIR One Pro" },
  { value: "flirExSeries", label: "FLIR EX-series" },
  { value: "flirExxSeries", label: "FLIR EXX-series" },
];

const Playground = () => {
  return (
    <div className=" flex flex-col gap-4  p-10 max-w-5xl mx-auto bg-[#F4F0F0]">
      <Input type="text" placeholder="Nombre" variant="simple" />
      <Input type="email" placeholder="Email" variant="simple" />
      <Input type="password" placeholder="****************" variant="simple" />

      {/* Radio Buttons */}
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>

      {/* Simple Radio Button */}
      <input type="checkbox" />

      {/* Text Area */}
      <Textarea />

      <div className="mt-10 bg-gray-100 p-10">
        <Input type="email" placeholder="Contraseña" variant="newsletter" />
      </div>

      {/* Forms */}
      <Form />

      {/* Radio Button XL Starts  */}
      <Title tag="h4">Radio Button XL</Title>
      <RadioGroup className=" grid grid-cols-2 gap-5" defaultValue="radio1">
        <div className="bg-[#1a9eda] p-5  flex flex-col gap-4">
          <ParaL color="white" tag="p">
            Unchecked
          </ParaL>
          <RadioButtonXL variant="azul-xl" id="radio1" title="Mail" />
          <ParaL color="white" tag="p">
            Checked
          </ParaL>
          <RadioButtonXL
            variant="azul-xl"
            icon={loveIcon}
            checked
            id="radio2"
            title="Llamada"
          />
        </div>
        <div className="bg-white p-5  flex flex-col gap-4">
          <ParaL tag="p">Unchecked</ParaL>
          <RadioButtonXL id="radio4" title="SMS" />
          <ParaL tag="p">Checked</ParaL>
          <RadioButtonXL id="radio3" title="SMS" checked />
        </div>
      </RadioGroup>
      {/* Radio Button XL Ends */}

      {/* =================================== */}
      {/* CheckBox Starts */}
      <Title tag="h2">CheckBoxs</Title>
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
      <Title tag="h2">Radio Button</Title>

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
      <Title tag="h4">Drop Down / Select</Title>
      <div className="grid grid-cols-2 gap-2 gap-y-28 bg-white mb-48">
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
    </div>
  );
};

export default Playground;
