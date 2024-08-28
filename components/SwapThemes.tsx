import React, { useEffect } from "react";
const { themeChange } = require("theme-change");

const SwapThemes = () => {
  useEffect(() => {
    themeChange(false); // This line initializes the theme-change functionality
  }, []);

  return (
    <div title="Change Theme" className="dropdown dropdown-end">
      <div tabIndex={0} className="btn gap-2 normal-case btn-ghost">
        {/* SVG and other elements */}
        <span className="hidden md:inline">Change Theme</span>
        {/* Dropdown SVG */}
      </div>
      <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px h-96 w-52 overflow-y-auto shadow-2xl mt-16">
        <ul className="menu menu-compact p-4" tabIndex={0}>
          {/* Theme buttons */}
          <li>
            <button data-set-theme="light" data-act-classname="active">
              🌝 light
            </button>
          </li>
          <li>
            <button data-set-theme="dark" data-act-classname="active">
              🌚 dark
            </button>
          </li>
          <li>
            <button data-set-theme="cupcake" data-act-classname="active">
              🧁 cupcake
            </button>
          </li>
          <li>
            <button data-set-theme="bumblebee" data-act-classname="active">
              🐝 bumblebee
            </button>
          </li>
          <li>
            <button data-set-theme="emerald" data-act-classname="active">
              ✳️ Emerald
            </button>
          </li>
          <li>
            <button data-set-theme="corporate" data-act-classname="active">
              🏢 Corporate
            </button>
          </li>
          <li>
            <button data-set-theme="synthwave" data-act-classname="active">
              🌃 synthwave
            </button>
          </li>
          <li>
            <button data-set-theme="retro" data-act-classname="active">
              👴 retro
            </button>
          </li>
          <li>
            <button data-set-theme="cyberpunk" data-act-classname="active">
              🤖 cyberpunk
            </button>
          </li>
          <li>
            <button data-set-theme="valentine" data-act-classname="active">
              🌸 valentine
            </button>
          </li>
          <li>
            <button data-set-theme="halloween" data-act-classname="active">
              🎃 halloween
            </button>
          </li>
          <li>
            <button data-set-theme="garden" data-act-classname="active">
              🌷 garden
            </button>
          </li>
          <li>
            <button data-set-theme="forest" data-act-classname="active">
              🌲 forest
            </button>
          </li>
          <li>
            <button data-set-theme="aqua" data-act-classname="active">
              🐟 aqua
            </button>
          </li>
          <li>
            <button data-set-theme="lofi" data-act-classname="active">
              👓 lofi
            </button>
          </li>
          <li>
            <button data-set-theme="pastel" data-act-classname="active">
              🖍 pastel
            </button>
          </li>
          <li>
            <button data-set-theme="fantasy" data-act-classname="active">
              🧚‍♀️ fantasy
            </button>
          </li>
          <li>
            <button data-set-theme="wireframe" data-act-classname="active">
              📝 Wireframe
            </button>
          </li>
          <li>
            <button data-set-theme="black" data-act-classname="active">
              🏴 black
            </button>
          </li>
          <li>
            <button data-set-theme="luxury" data-act-classname="active">
              💎 luxury
            </button>
          </li>
          <li>
            <button data-set-theme="dracula" data-act-classname="active">
              🧛‍♂️dracula
            </button>
          </li>
          <li>
            <button data-set-theme="cmyk" data-act-classname="active">
              🖨 CMYK
            </button>
          </li>
          <li>
            <button data-set-theme="autumn" data-act-classname="active">
              🍁 Autumn
            </button>
          </li>
          <li>
            <button data-set-theme="business" data-act-classname="active">
              💼 Business
            </button>
          </li>
          <li>
            <button data-set-theme="acid" data-act-classname="active">
              💊 Acid
            </button>
          </li>
          <li>
            <button data-set-theme="lemonade" data-act-classname="active">
              🍋 Lemonade
            </button>
          </li>
          <li>
            <button data-set-theme="night" data-act-classname="active">
              🌙 Night
            </button>
          </li>
          <li>
            <button data-set-theme="coffee" data-act-classname="active">
              ☕️ Coffee
            </button>
          </li>
          <li>
            <button data-set-theme="winter" data-act-classname="active">
              ❄️ Winter
            </button>
          </li>
          {/* Additional theme buttons */}
        </ul>
      </div>
    </div>
  );
};

export default SwapThemes;
