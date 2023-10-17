/* eslint-disable react/prop-types */
const Footer = ({ children }) => {
  return (
    <footer className="flex justify-between px-12 items-center">
      {children}
    </footer>
  );
};

export default Footer;
