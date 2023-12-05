import React from "react";
import Button from "../components/ui/button/Button";

const rightArrow = "arrow-right.svg";
const cartIcon = "/images/icons/cart-icon.svg";
const pencilIcon = "/images/icons/pencil.svg";
const downloadIcon = "/images/icons/download.svg";
const Playground = () => {
  return (
    <div className="container pt-10">
      {/* First Section */}
      <h1 className="text-5xl">Default buttons</h1>
      <div className="px-5 py-10 grid grid-cols-4 gap-36 mt-8 ">
        <Button
          // title="Test Button"
          variant="primary"
          size="xl"
          icon={pencilIcon}
        />
        <Button title="Continue" variant="secondary" />
        <Button title="Continue" variant="outline" />
        <Button title="Continue" variant="simple" />
        {/* Left Direction Buttons */}
        <Button
          size="xl"
          title="Xl button"
          variant="primary"
          icon={pencilIcon}
          direction="left"
        />
        <Button
          title="Inscríbete"
          variant="secondary"
          icon={pencilIcon}
          direction="left"
        />
        <Button
          title="Continue"
          variant="outline"
          icon={pencilIcon}
          direction="left"
        />
        <Button
          title="Continue"
          variant="simple"
          icon={downloadIcon}
          direction="left"
        />
        {/* Right Direction Buttons */}
        <Button
          title="Inscríbete"
          variant="primary"
          icon={pencilIcon}
          direction="right"
        />
        <Button
          title="Inscríbete"
          variant="secondary"
          icon={pencilIcon}
          direction="right"
        />
        <Button
          title="Continue"
          variant="outline"
          icon={pencilIcon}
          direction="right"
        />
        <Button
          title="Continue"
          variant="simple"
          icon={downloadIcon}
          direction="right"
        />

        {/* Without Text Buttons */}
        <Button variant="primary" icon={pencilIcon} direction="right" />
        <Button variant="secondary" icon={pencilIcon} direction="right" />
        <Button variant="outline" icon={pencilIcon} direction="right" />
        <Button
          iconSize={20}
          variant="simple"
          icon={pencilIcon}
          direction="right"
        />
      </div>
      <h1 className="text-5xl my-6">Azul buttons</h1>
      {/* Second Section */}

      <div className="px-5 py-10 grid grid-cols-4 gap-36 mt-8 bg-blue-500 ">
        <Button title="Continue" variant="primary-azul" />
        <Button title="Continue" variant="secondary-azul" />
        <Button title="Continue" variant="outline-azul" />
        <Button title="Continue" variant="simple-azul" />
        {/* Left Direction Buttons */}
        <Button
          title="Inscríbete"
          variant="primary-azul"
          icon={pencilIcon}
          direction="left"
        />
        <Button
          title="Inscríbete"
          variant="secondary-azul"
          icon={pencilIcon}
          direction="left"
        />
        <Button
          title="Continue"
          variant="outline-azul"
          icon={pencilIcon}
          direction="left"
        />
        <Button
          title="Continue"
          variant="simple-azul"
          icon={downloadIcon}
          direction="left"
        />
        {/* Right Direction Buttons */}
        <Button
          title="Inscríbete"
          variant="primary-azul"
          icon={pencilIcon}
          direction="right"
        />
        <Button
          title="Inscríbete"
          variant="secondary-azul"
          icon={pencilIcon}
          direction="right"
        />
        <Button
          title="Continue"
          variant="outline-azul"
          icon={pencilIcon}
          direction="right"
        />
        <Button
          title="Continue"
          variant="simple-azul"
          icon={downloadIcon}
          direction="right"
        />

        {/* Without Text Buttons */}
        <Button variant="primary-azul" icon={pencilIcon} direction="right" />
        <Button variant="secondary-azul" icon={pencilIcon} direction="right" />
        <Button variant="outline-azul" icon={pencilIcon} direction="right" />
        <Button
          iconSize={20}
          variant="simple-azul"
          icon={downloadIcon}
          direction="right"
        />
      </div>
      {/* Third Section */}
      <h1 className="text-5xl my-6">Default disabled buttons</h1>
      <div className="px-5 py-10 grid grid-cols-4 gap-36 mt-8 mb-12 ">
        <Button disabled title="Continue" variant="primary" size="xl" />
        <Button disabled title="Continue" variant="secondary" />
        <Button disabled title="Continue" variant="outline" />
        <Button disabled title="Continue" variant="simple" />
        {/* Left Direction Buttons */}
        <Button
          disabled
          size="xl"
          title="Xl button"
          variant="primary"
          icon={pencilIcon}
          direction="left"
        />
        <Button
          disabled
          title="Inscríbete"
          variant="secondary"
          icon={pencilIcon}
          direction="left"
        />
        <Button
          disabled
          title="Continue"
          variant="outline"
          icon={pencilIcon}
          direction="left"
        />
        <Button
          disabled
          title="Continue"
          variant="simple"
          icon={downloadIcon}
          direction="left"
        />
        {/* Right Direction Buttons */}
        <Button
          disabled
          title="Inscríbete"
          variant="primary"
          icon={pencilIcon}
          direction="right"
        />
        <Button
          disabled
          title="Inscríbete"
          variant="secondary"
          icon={pencilIcon}
          direction="right"
        />
        <Button
          disabled
          title="Continue"
          variant="outline"
          icon={pencilIcon}
          direction="right"
        />
        <Button
          disabled
          title="Continue"
          variant="simple"
          icon={downloadIcon}
          direction="right"
        />

        {/* Without Text Buttons */}
        <Button disabled variant="primary" icon={pencilIcon} />
        <Button disabled variant="secondary" icon={downloadIcon} />
        <Button
          disabled
          variant="outline"
          icon={downloadIcon}
          direction="right"
        />
        <Button disabled variant="simple" icon={downloadIcon} />
      </div>
    </div>
  );
};

export default Playground;
