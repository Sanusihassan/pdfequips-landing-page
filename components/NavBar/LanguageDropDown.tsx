import { useRouter } from "next/router";
import Link from "next/link";
import { Dropdown } from "react-bootstrap";
import LanguageIcon from "../icons/LanguageIcon";
import { useDispatch, useSelector } from "react-redux";
import { setLang, ToolState } from "../../src/store";

function LanguageDropdown() {
  // const router = useRouter();
  // const segments = router.asPath.split("/");
  // const languageCodes = ["ar", "fr", "zh", "hi", "es"];
  // let languageCodeIndex = segments.findIndex((segment) => {
  //   return languageCodes.includes(segment);
  // });
  // // let path;

  // if (segments.length === 2) {
  //   path = "";
  // } else {
  //   path =
  //     languageCodeIndex !== -1
  //       ? segments[languageCodeIndex + 1]
  //       : segments[segments.length - 1];
  // }

  // let route = path.length > 0 ? `/${path}` : "";
  const state = useSelector((state: { tool: ToolState }) => state.tool);
  const dispatch = useDispatch();
  return (
    <li className="dropdown-item">
      <Dropdown className="lang-dropdown dropdown-wrapper">
        <Dropdown.Toggle variant="default" id="language-dropdown">
          <LanguageIcon />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Link
            href={`/${state.path}`}
            onClick={() => dispatch(setLang(""))}
            passHref
          >
            <a className="dropdown-item" rel="noopener">
              English
            </a>
          </Link>
          <Link
            href={`/ar/${state.path}`}
            onClick={() => dispatch(setLang("ar"))}
            passHref
          >
            <a className="dropdown-item" rel="noopener">
              العربية
            </a>
          </Link>

          <Link
            href={`/fr/${state.path}`}
            onClick={() => dispatch(setLang("fr"))}
            passHref
          >
            <a className="dropdown-item" rel="noopener">
              française
            </a>
          </Link>

          <Link
            href={`/zh/${state.path}`}
            onClick={() => dispatch(setLang("zh"))}
            passHref
          >
            <a className="dropdown-item" rel="noopener">
              普通话
            </a>
          </Link>
          <Link
            href={`/hi/${state.path}`}
            onClick={() => dispatch(setLang("hi"))}
            passHref
          >
            <a className="dropdown-item" rel="noopener">
              हिन्दी
            </a>
          </Link>
          <Link
            href={`/es/${state.path}`}
            onClick={() => dispatch(setLang("es"))}
            passHref
          >
            <a className="dropdown-item" rel="noopener">
              español
            </a>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </li>
  );
}

export default LanguageDropdown;
