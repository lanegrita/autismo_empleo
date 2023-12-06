import React from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Input from "@/app/components/form/input/Input";
import RadioButton from "@/app/components/form/radio-button/RadioButton";
import Dropdown from "@/app/components/form/dropdown/Dropdown";
import Textarea from "@/app/components/form/text-area/Textarea";

const Playground = () => {
  return (
    <div className=" flex flex-col gap-4  p-10 max-w-5xl mx-auto">
      <Input type="text" placeholder="Nombre" variant="simple" />
      <Input type="email" placeholder="Email" variant="simple" />
      <Input type="password" placeholder="****************" variant="simple" />

      {/* Radio Buttons */}
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>

      {/* Checkboxes */}
      <div className="items-top flex space-x-2 max-w-sm">
        <Checkbox id="terms1" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Acepto las Condiciones legales, del servicio y la Información básica
            de privacidad.
          </label>
        </div>
      </div>

      {/* Simple Radio Button */}
      <input type="checkbox" />

      {/* Radio Button */}
      <RadioGroup defaultValue="radio1">
        <RadioButton checked id="radio1" name="options" title="Llamada" />
        <RadioButton id="radio2" name="options" title="SMS" />
        <RadioButton id="radio3" name="options" title="Mail" />
      </RadioGroup>

      {/* DropDown */}
      <Dropdown />

      {/* Text Area */}
      <Textarea />

      <div className="mt-10 bg-gray-100 p-10">
        <Input type="email" placeholder="Contraseña" variant="newsletter" />
      </div>
    </div>
  );
};

export default Playground;
