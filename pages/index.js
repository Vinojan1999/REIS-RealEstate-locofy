import Head from "next/head";
import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import PropertiesGridContainer from "../components/properties-grid-container";

const PropertiesGridView = () => {
  return (
    <>
      <Head>
        <title>REIS Real Estate</title>
        <meta
          name="description"
          content="Discover your perfect home with REIS"
        />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
        <header className="self-stretch bg-gray-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-body-regular-600 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
          <div className="flex-1 flex flex-row items-center justify-between">
            <Link
              className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-center gap-[8px] text-[inherit]"
              href="/landing-page"
            >
              <img className="relative w-11 h-11" alt="" src="/houseline.svg" />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px] font-semibold">
                  REIS
                </div>
                <div className="relative text-sm leading-[16px] font-medium">
                  Real State
                </div>
              </div>
            </Link>
            <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex">
              <div className="flex flex-row items-start justify-start gap-[30px] lg:hidden">
                <Link
                  className="cursor-pointer [text-decoration:none] relative leading-[22px] text-[inherit]"
                  href="/landing-page"
                >
                  HOME
                </Link>
                <a className="[text-decoration:none] relative leading-[22px] text-[inherit]">
                  ABOUT US
                </a>
                <a className="[text-decoration:none] relative leading-[22px] text-[inherit]">
                  OUR AGENTS
                </a>
                <a className="[text-decoration:none] relative leading-[22px] font-semibold text-[inherit]">
                  PROPERTIES
                </a>
                <a className="[text-decoration:none] relative leading-[22px] text-[inherit]">
                  GALLERY
                </a>
                <a className="[text-decoration:none] relative leading-[22px] text-[inherit]">
                  BLOG
                </a>
                <a className="[text-decoration:none] relative leading-[22px] text-[inherit]">
                  CONTACT US
                </a>
                <a className="[text-decoration:none] relative leading-[22px] text-[inherit]">
                  SEARCH
                </a>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center lg:flex">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
                  alt=""
                  src="/notification.svg"
                />
              </button>
            </div>
          </div>
        </header>
        <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url('/category@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="flex flex-col items-center justify-start gap-[12px]">
            <div className="relative leading-[72px] font-semibold">
              Properties
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px] text-base text-gray-50 font-body-regular-600">
              <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                Home
              </a>
              <div className="relative leading-[24px]">/</div>
              <div className="relative leading-[24px] font-medium text-gray-white">
                Properties
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col pt-16 px-0 pb-2 items-center justify-start gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
          <div className="w-[272px] flex flex-row items-center justify-start">
            <div className="flex flex-row items-end justify-start gap-[16px]">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="absolute h-[6.25%] w-[56.25%] top-[21.88%] right-[12.5%] bottom-[71.88%] left-[31.25%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector1.svg"
                  />
                  <img
                    className="absolute h-[6.25%] w-[56.25%] top-[46.88%] right-[12.5%] bottom-[46.88%] left-[31.25%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector1.svg"
                  />
                  <img
                    className="absolute h-[6.25%] w-[56.25%] top-[71.88%] right-[12.5%] bottom-[21.88%] left-[31.25%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector1.svg"
                  />
                  <img
                    className="absolute h-[9.38%] w-[9.38%] top-[20.31%] right-[78.13%] bottom-[70.31%] left-[12.5%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector2.svg"
                  />
                  <img
                    className="absolute h-[9.38%] w-[9.38%] top-[45.31%] right-[78.13%] bottom-[45.31%] left-[12.5%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector2.svg"
                  />
                  <img
                    className="absolute h-[9.38%] w-[9.38%] top-[70.31%] right-[78.13%] bottom-[20.31%] left-[12.5%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector2.svg"
                  />
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="absolute h-[31.25%] w-[31.25%] top-[15.63%] right-[53.13%] bottom-[53.13%] left-[15.63%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector3.svg"
                  />
                  <img
                    className="absolute h-[31.25%] w-[31.25%] top-[15.63%] right-[15.63%] bottom-[53.13%] left-[53.13%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector3.svg"
                  />
                  <img
                    className="absolute h-[31.25%] w-[31.25%] top-[53.13%] right-[53.13%] bottom-[15.63%] left-[15.63%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector3.svg"
                  />
                  <img
                    className="absolute h-[31.25%] w-[31.25%] top-[53.13%] right-[15.63%] bottom-[15.63%] left-[53.13%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector3.svg"
                  />
                </button>
              </div>
              <div className="relative leading-[24px]">Sort by:</div>
              <Dropdown
                overlay={
                  <Menu>
                    {[
                      { value: "Popular properties" },
                      { value: "Latest properties" },
                      { value: "Recommended properties" },
                    ].map((option, index) => (
                      <Menu.Item key={index}>
                        <a onClick={(e) => e.preventDefault()}>
                          {option.value || ""}
                        </a>
                      </Menu.Item>
                    ))}
                  </Menu>
                }
                placement="bottomLeft"
                trigger={["hover"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  {`Default Order `}
                  <DownOutlined />
                </a>
              </Dropdown>
            </div>
          </div>
          <PropertiesGridContainer />
          <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
            <button className="cursor-pointer [border:none] p-2.5 bg-primary-50 rounded flex flex-row items-start justify-start">
              <img className="relative w-6 h-6" alt="" src="/arrowleft.svg" />
            </button>
            <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-500 rounded-10xs flex flex-col items-start justify-start">
              <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-gray-white text-center flex items-end justify-center w-[26px]">
                1
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-50 rounded-10xs flex flex-col items-start justify-start">
              <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-primary-500 text-center flex items-end justify-center w-[26px]">
                2
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-50 rounded-10xs flex flex-col items-start justify-start">
              <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-primary-500 text-center flex items-end justify-center w-[26px]">
                3
              </div>
            </button>
            <div className="rounded-10xs bg-primary-50 flex flex-col py-2.5 px-[9px] items-start justify-start">
              <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
                ...
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-50 rounded-10xs flex flex-col items-start justify-start">
              <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-primary-500 text-center flex items-end justify-center w-[26px]">
                54
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-2.5 bg-primary-500 rounded flex flex-row items-start justify-start">
              <img className="relative w-6 h-6" alt="" src="/arrowright.svg" />
            </button>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-row p-[50px] items-start justify-start md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col">
          <footer className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-gray-black font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
            <div className="w-[312px] h-[300px] flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-regular-600">
              <div className="flex flex-row items-center justify-center gap-[8px]">
                <img
                  className="relative w-11 h-11"
                  alt=""
                  src="/houseline1.svg"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[24px] font-semibold">
                    REIS
                  </div>
                  <div className="relative text-sm leading-[16px] font-medium">
                    Real State
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[168px] flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
                <div className="relative text-5xl leading-[32px] font-semibold text-gray-black">
                  Contact Us
                </div>
                <div className="relative leading-[24px]">
                  Call : +123 400 123
                </div>
                <div className="relative leading-[24px] flex items-end w-[312px]">
                  Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
                  auctor felis.
                </div>
                <div className="relative leading-[24px] text-gray-700">
                  Email: example@mail.com
                </div>
              </div>
              <div className="w-[304px] flex flex-row items-center justify-between">
                <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                  <img
                    className="relative w-5 h-[21.67px]"
                    alt=""
                    src="/social-media-logo.svg"
                  />
                </div>
                <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/social-media-logo1.svg"
                  />
                </div>
                <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/social-media-logo2.svg"
                  />
                </div>
                <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/social-media-logo3.svg"
                  />
                </div>
                <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/social-media-logo4.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
              <div className="relative leading-[32px] font-semibold">
                Features
              </div>
              <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
                <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                  Home
                </a>
                <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                  Become a Host
                </a>
                <div className="relative leading-[24px]">Pricing</div>
                <div className="relative leading-[24px]">Blog</div>
                <div className="relative leading-[24px]">Contact</div>
              </div>
            </div>
            <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
              <div className="relative leading-[32px] font-semibold">
                Company
              </div>
              <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
                <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                  About Us
                </a>
                <div className="relative leading-[24px]">Press</div>
                <div className="relative leading-[24px]">Contact</div>
                <div className="relative leading-[24px]">Careers</div>
                <div className="relative leading-[24px]">Blog</div>
              </div>
            </div>
            <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px]">
              <div className="relative leading-[32px] font-semibold">
                Team and policies
              </div>
              <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
                <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
                  Terms of servies
                </a>
                <div className="relative leading-[24px]">Privacy Policy</div>
                <div className="relative leading-[24px]">Security</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PropertiesGridView;
