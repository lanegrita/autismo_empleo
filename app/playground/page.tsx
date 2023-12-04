import React from "react";
import Button from "../components/ui/button/Button";

const rightArrow = "/images/icons/right-arrow-white.svg";
const cartArrow = "/images/icons/cart-icon.svg";
const pencilIcon = "/images/icons/pencil-outline.svg";
const downloadIcon = "/images/icons/download-icon.svg";
const Playground = () => {
  return (
    <div>
      <div className="px-5 py-10 grid grid-cols-4 gap-36 container mt-8 ">
        <Button title="Continue" variant="primary" />
        <Button title="Continue" variant="secondary" />
        <Button title="Continue" variant="outline" />
        <Button title="Continue" variant="simple" />
        {/* Left Direction Buttons */}
        <Button
          title="Inscríbete"
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
          icon={downloadIcon}
          direction="right"
        />
      </div>
      {/* Second Section */}
      <div className="px-5 py-10 grid grid-cols-4 gap-36 container mt-8 bg-blue-500 ">
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
    </div>
  );
};

export default Playground;
