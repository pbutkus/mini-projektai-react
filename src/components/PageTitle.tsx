import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type PageTitleProps = {
  title?: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [location, title]);

  return null;
};

export default PageTitle;
