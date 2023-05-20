import { useRouter } from "next/router";
import Link from "next/link";
import { Dropdown } from "react-bootstrap";
import LanguageIcon from "../icons/LanguageIcon";

function LanguageDropdown() {
  const router = useRouter();
  const segments = router.asPath.split("/");
  const languageCodes = ["ar", "fr", "zh", "hi", "es"];
  let languageCodeIndex = segments.findIndex((segment) => {
    return languageCodes.includes(segment);
  });
  let path;

  if (segments.length === 2) {
    path = "";
  } else {
    path =
      languageCodeIndex !== -1
        ? segments[languageCodeIndex + 1]
        : segments[segments.length - 1];
  }

  let route = path.length > 0 ? `/${path}` : "";
  return (
    <Dropdown className="lang-dropdown">
      <Dropdown.Toggle variant="default" id="language-dropdown">
        <LanguageIcon />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Link href={`/${path}`}>
          <a className="dropdown-item">English</a>
        </Link>
        <Link href={`/ar${route}`}>
          <a className="dropdown-item">العربية</a>
        </Link>

        <Link href={`/fr${route}`}>
          <a className="dropdown-item">française</a>
        </Link>

        <Link href={`/zh${route}`}>
          <a className="dropdown-item">普通话</a>
        </Link>
        <Link href={`/hi${route}`}>
          <a className="dropdown-item">हिन्दी</a>
        </Link>
        <Link href={`/es${route}`}>
          <a className="dropdown-item">español</a>
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageDropdown;
