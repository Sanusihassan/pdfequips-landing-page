// import Link from "next/link";
import { Dropdown } from "react-bootstrap";
import LanguageIcon from "../icons/LanguageIcon";
import { useSelector } from "react-redux";
import { ToolState } from "../../src/store";
import Cookies from "js-cookie";
import { setLanguage } from "../../src/language";

function LanguageDropdown() {
  const state = useSelector((state: { tool: ToolState }) => state.tool);
  // const dispatch = useDispatch();

  const setLangToken = (language: string) => {
    setLanguage(language);
  };

  const clearLangToken = () => {
    Cookies.set("languageToken", "");
  };

  return (
    <li className="dropdown-item">
      <Dropdown className="lang-dropdown dropdown-wrapper">
        <Dropdown.Toggle variant="default" id="language-dropdown">
          <LanguageIcon />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {/* <Link href={`/${state.path}`} passHref> */}
          <a
            href={`/${state.path}`}
            onClick={clearLangToken}
            className="dropdown-item"
            rel="noopener"
          >
            English
          </a>
          {/* </Link> */}
          {/* <Link href={`/ar/${state.path}`} passHref> */}
          <a
            href={`/ar/${state.path}`}
            onClick={() => setLangToken("ar")}
            className="dropdown-item"
            rel="noopener"
          >
            العربية
          </a>
          {/* </Link> */}
          {/* <Link href={`/fr/${state.path}`} passHref> */}
          <a
            href={`/fr/${state.path}`}
            onClick={() => setLangToken("fr")}
            className="dropdown-item"
            rel="noopener"
          >
            française
          </a>
          {/* </Link> */}
          {/* <Link href={`/zh/${state.path}`} passHref> */}
          <a
            href={`/zh/${state.path}`}
            onClick={() => setLangToken("zh")}
            className="dropdown-item"
            rel="noopener"
          >
            普通话
          </a>
          {/* </Link> */}
          {/* <Link href={`/hi/${state.path}`} passHref> */}
          <a
            href={`/hi/${state.path}`}
            onClick={() => setLangToken("hi")}
            className="dropdown-item"
            rel="noopener"
          >
            हिन्दी
          </a>
          {/* </Link> */}
          {/* <Link href={`/es/${state.path}`} passHref> */}
          <a
            href={`/es/${state.path}`}
            onClick={() => setLangToken("es")}
            className="dropdown-item"
            rel="noopener"
          >
            español
          </a>
          {/* </Link> */}
        </Dropdown.Menu>
      </Dropdown>
    </li>
  );
}

export default LanguageDropdown;
