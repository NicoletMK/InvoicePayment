import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Button, Icon, TextField } from "@mui/material";
import {
  Menu as AntMenu,
  Dropdown as AntDropdown,
  Button as AntButton,
} from "antd";
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

const Invoices15: NextPage = () => {
  return (
    <div className="relative bg-gray-300 w-full h-[1024px] overflow-hidden text-left text-base text-gray-100 font-helvetica-neue">
      <div className="absolute top-[100px] left-[215px] rounded-xl bg-gray-200 box-border w-[1257px] h-[884px] overflow-hidden border-[2px] border-solid border-darkslategray-100">
        <div className="absolute top-[0px] left-[0px] rounded-tl-xl rounded-tr-none rounded-b-none bg-gray-200 box-border w-[1257px] h-20 overflow-hidden text-17xl border-[2px] border-solid border-darkslategray-100">
          <b className="absolute top-[18px] left-[40px]">Stripe</b>
        </div>
        <div className="absolute top-[100px] left-[40px] w-[674px] h-[764px] text-sm text-lightslategray">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-300 box-border w-[674px] h-[764px] overflow-hidden border-[1px] border-solid border-darkslategray-100">
            <div className="absolute top-[190px] left-[259px]" />
            <div className="absolute top-[279px] left-[147px]">
              <div className="absolute top-[1px] left-[-1px] w-[148px] h-[17px]">
                <div className="absolute top-[0px] left-[0px]">
                  (Max 250 letters: 0/250)
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[123px] left-[274.29px] w-[84.18px] h-[21px]" />
          <Button
            className="absolute top-[629px] left-[40px]"
            sx={{ width: 95 }}
            variant="contained"
            color="primary"
            endIcon={<Icon>done_sharp</Icon>}
          >
            Update
          </Button>
        </div>
        <div className="absolute top-[100px] left-[754px] w-[463px] h-[335px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-300 box-border w-[463px] h-[335px] overflow-hidden border-[1px] border-solid border-darkslategray-100">
            <div className="absolute top-[190px] left-[259px]" />
            <b className="absolute top-[40px] left-[40px] text-5xl">
              Connect With Stripe
            </b>
            <div className="absolute top-[159px] left-[40px] flex items-center w-[383px]">
              Start by connecting your Stripe Account. We've partnered with
              Stripe to provide you with the easiest way to accept payments
              including credit cards online.
            </div>
            <Button
              className="absolute top-[255px] left-[40px]"
              variant="outlined"
              color="info"
            >
              Get paid with stripe
            </Button>
            <a className="[text-decoration:none] absolute top-[105px] left-[316px] font-medium text-steelblue-100">
              How it works
            </a>
            <img
              className="absolute top-[89px] left-[40px] rounded-[200px] w-[50px] h-[50px] overflow-hidden"
              alt=""
              src="/frame-34092.svg"
            />
            <img
              className="absolute top-[96px] left-[110px] w-[90px] h-[37.33px] mix-blend-normal"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className="absolute top-[48.94px] left-[188.42px] w-[57.83px] h-[8.36px]" />
        </div>
        <b className="absolute top-[140px] left-[80px] text-5xl">
          Invoice Default Settings
        </b>
        <TextField
          className="[border:none] bg-[transparent] absolute top-[213px] left-[80px]"
          sx={{ width: 227 }}
          color="primary"
          variant="filled"
          type="text"
          label="Invoice From"
          placeholder="Placeholder"
          size="small"
          margin="none"
        />
        <TextField
          className="[border:none] bg-[transparent] absolute top-[404px] left-[81px]"
          sx={{ width: 593 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Invoice Details here.... (optional)"
          size="medium"
          margin="none"
        />
        <TextField
          className="[border:none] bg-[transparent] absolute top-[569px] left-[80px]"
          sx={{ width: 593 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Invoice Details here.... (optional)"
          size="medium"
          margin="none"
        />
        <TextField
          className="[border:none] bg-[transparent] absolute top-[308px] left-[81px]"
          sx={{ width: 227 }}
          color="primary"
          variant="outlined"
          type="number"
          label="%"
          size="small"
          margin="none"
        />
        <div className="absolute top-[189px] left-[80px]">Invoice Title</div>
        <div className="absolute top-[380px] left-[81px]">Invoice Detail</div>
        <div className="absolute top-[544px] left-[80px] flex flex-row items-center justify-start gap-[10px]">
          <div className="relative">Invoice Notes</div>
          <div className="relative w-[168px] h-[21px] text-sm text-lightslategray">
            <div className="absolute top-[1px] left-[-1px] w-[148px] h-[17px]">
              <div className="absolute top-[0px] left-[0px]">
                (Max 250 letters: 0/250)
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[284px] left-[81px]">Discount</div>
        <div className="absolute top-[190px] left-[328px]">
          New Invoice Number
        </div>
        <div className="absolute top-[285px] left-[329px]">Tax Name</div>
        <div className="absolute top-[190px] left-[499px]">
          Invoice Currency
        </div>
        <div className="absolute top-[285px] left-[500px]">Tax Value</div>
        <TextField
          className="[border:none] bg-[transparent] absolute top-[214px] left-[327px]"
          sx={{ width: 151 }}
          color="primary"
          variant="outlined"
          type="text"
          label="1001"
          placeholder="Placeholder"
          size="small"
          margin="none"
        />
        <TextField
          className="[border:none] bg-[transparent] absolute top-[309px] left-[328px]"
          sx={{ width: 151 }}
          color="primary"
          variant="outlined"
          type="text"
          size="small"
          margin="none"
        />
        <AntDropdown
          className="absolute top-[214px] left-[498px]"
          overlay={
            <AntMenu>
              {(
                [{ value: "EUR" }, { value: "RMB" }, { value: "INR" }] as any
              ).map((option: any, index: number) => (
                <AntMenu.Item key={index}>
                  <a onClick={(e) => e.preventDefault()}>
                    {option.value || ""}
                  </a>
                </AntMenu.Item>
              ))}
            </AntMenu>
          }
          placement="topCenter"
          trigger={["hover"]}
          arrow={true}
        >
          <AntButton onClick={(e) => e.preventDefault()}>
            {`USD `}
            <DownOutlined />
          </AntButton>
        </AntDropdown>
        <TextField
          className="[border:none] bg-[transparent] absolute top-[309px] left-[499px]"
          sx={{ width: 176 }}
          color="primary"
          variant="outlined"
          type="number"
          label="%"
          placeholder="="
          size="small"
          margin="none"
        />
      </div>
      <div className="absolute top-[0px] left-[0px] bg-gray-300 w-[1512px] h-[100px] overflow-hidden font-inter">
        <div className="absolute top-[35px] left-[60px] w-[155px] h-[30px] text-lg-9">
          <img
            className="relative w-[29.99px] h-[30px]"
            alt=""
            src="/subtract.svg"
          />
          <div className="absolute top-[3.95px] left-[45.77px] w-[109.23px] h-[23.06px]">
            <b className="absolute top-[0px] left-[0px] flex items-center w-[109.23px] h-[23.06px]">
              AgenciFlow
            </b>
          </div>
        </div>
        <img
          className="absolute top-[34px] left-[1324px] w-8 h-8 overflow-hidden"
          alt=""
          src="/mdibellnotificationoutline.svg"
        />
        <img
          className="absolute top-[30px] left-[1428px] w-10 h-10"
          alt=""
          src="/group-34050.svg"
        />
        <div className="absolute top-[34px] left-[286px] w-[744px] h-[30px] font-helvetica-neue">
          <div className="absolute top-[0px] left-[0px] w-[744px] h-[30px]">
            <div className="absolute top-[1px] left-[0px] rounded-[7.87px] w-[106px] h-[29px] overflow-hidden">
              <div className="absolute top-[4px] left-[12px] w-[82px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Dashboard
                </div>
              </div>
            </div>
            <div className="absolute top-[1px] left-[214px] rounded-[7.87px] w-[106px] h-[29px] overflow-hidden">
              <div className="absolute top-[4px] left-[29px] w-12 h-5">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Teams
                </div>
              </div>
            </div>
            <div className="absolute top-[1px] left-[320px] rounded-[7.87px] w-[106px] h-[29px] overflow-hidden">
              <div className="absolute top-[4px] left-[27px] w-[51px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Clients
                </div>
              </div>
            </div>
            <div className="absolute top-[1px] left-[426px] rounded-[7.87px] w-[106px] h-[29px] overflow-hidden">
              <div className="absolute top-[4px] left-[32px] w-[42px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Tasks
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[532px] rounded-[7.87px] bg-steelblue-100 w-[106px] h-[30px] overflow-hidden">
              <div className="absolute top-[5px] left-[26px] w-[54px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Boards
                </div>
              </div>
            </div>
            <div className="absolute top-[1px] left-[638px] rounded-[7.87px] w-[106px] h-[29px] overflow-hidden">
              <div className="absolute top-[4px] left-[22px] w-[62px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Invoices
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[1px] left-[106px] rounded-[7.87px] w-[106px] h-[29px] overflow-hidden">
            <div className="absolute top-[4px] left-[35px] w-[35px] h-5">
              <div className="absolute top-[0px] left-[0px] font-medium">
                Chat
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[25px] left-[1104px] rounded-3xs bg-gray-200 w-[200px] h-[50px] overflow-hidden">
          <img
            className="absolute top-[9px] left-[9px] w-8 h-8 overflow-hidden"
            alt=""
            src="/icroundsearch.svg"
          />
          <div className="absolute top-[16px] left-[50px] font-medium">
            Search
          </div>
        </div>
        <img
          className="absolute top-[34px] left-[1376px] w-8 h-8 overflow-hidden"
          alt=""
          src="/uiwsetting.svg"
        />
        <div className="absolute top-[0px] left-[0px] bg-gray-300 w-[1512px] h-[100px] overflow-hidden font-helvetica-neue">
          <a className="[text-decoration:none] absolute top-[31px] left-[1427px] w-[38px] h-[38px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro w-[38px] h-[38px]" />
            <img
              className="absolute top-[0px] left-[0px] rounded-[50%] w-[38px] h-[38px] object-cover"
              alt=""
              src="/ellipse-889@2x.png"
            />
          </a>
          <div className="absolute top-[29px] left-[1164px] rounded-3xs bg-gray-200 w-[148px] h-[42px] overflow-hidden">
            <img
              className="absolute h-[39.62%] w-[10.77%] top-[30.95%] right-[79.09%] bottom-[29.43%] left-[10.14%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
            <div className="absolute top-[26.19%] left-[31.08%] font-medium">
              Search
            </div>
          </div>
          <div className="absolute top-[1px] left-[180px] w-[955px] h-[100px] overflow-hidden text-center">
            <div className="absolute top-[35px] left-[20px] rounded-md w-[110px] h-[30px] overflow-hidden">
              <div className="absolute top-[5px] left-[0px] w-[110px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[110px]">
                  Dashboard
                </div>
              </div>
            </div>
            <div className="absolute top-[35px] left-[135px] rounded-md w-[110px] h-[30px] overflow-hidden">
              <div className="absolute top-[5px] left-[0px] w-[110px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[110px]">
                  Chat
                </div>
              </div>
            </div>
            <div className="absolute top-[35px] left-[250px] rounded-md w-[110px] h-[30px] overflow-hidden">
              <div className="absolute top-[5px] left-[0px] w-[110px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[110px]">
                  Projects
                </div>
              </div>
            </div>
            <div className="absolute top-[35px] left-[365px] rounded-md w-[110px] h-[30px] overflow-hidden">
              <div className="absolute top-[5px] left-[0px] w-[110px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[110px]">
                  Clients
                </div>
              </div>
            </div>
            <div className="absolute top-[35px] left-[480px] rounded-md w-[110px] h-[30px] overflow-hidden">
              <div className="absolute top-[5px] left-[0px] w-[110px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[110px]">
                  Tasks
                </div>
              </div>
            </div>
            <div className="absolute top-[35px] left-[595px] rounded-md w-[110px] h-[30px] overflow-hidden">
              <div className="absolute top-[5px] left-[0px] w-[110px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[110px]">
                  Boards
                </div>
              </div>
            </div>
            <Link
              className="cursor-pointer [text-decoration:none] absolute top-[35px] left-[710px] text-[inherit]"
              href="/"
            >
              <div className="absolute top-[5px] left-[0px] w-[110px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[110px]">
                  Invoices
                </div>
              </div>
            </Link>
            <a className="[text-decoration:none] absolute top-[35px] left-[825px] rounded-md w-[110px] h-[30px] overflow-hidden text-[inherit]">
              <div className="absolute top-[5px] left-[0px] w-[110px] h-5">
                <div className="absolute top-[0px] left-[0px] font-medium flex items-center justify-center w-[110px]">
                  AI Assistant
                </div>
              </div>
            </a>
          </div>
          <img
            className="absolute h-[30%] w-[1.59%] top-[35%] right-[10.31%] bottom-[35%] left-[88.1%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/notification.svg"
          />
          <img
            className="absolute h-[30%] w-[1.98%] top-[35%] right-[6.94%] bottom-[35%] left-[91.07%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/settings.svg"
          />
          <img
            className="absolute top-[32px] left-[60px] w-[86px] h-[35.44px]"
            alt=""
            src="/logo.svg"
          />
        </div>
      </div>
      <div className="absolute top-[100px] left-[40px] rounded-xl box-border w-[145px] h-[660px] overflow-hidden text-center border-[2px] border-solid border-darkslategray-100">
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[20px] left-[20px] rounded-3xs bg-gray-200 w-[104px] h-[95px] overflow-hidden text-[inherit]"
          href="/"
        >
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
          <div className="absolute top-[63px] left-[21px] font-medium flex items-center justify-center w-[62px] h-3.5">
            Invoices
          </div>
          <img
            className="absolute h-[37.89%] w-[34.61%] top-[17.89%] right-[32.7%] bottom-[44.21%] left-[32.69%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector2.svg"
          />
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[335px] left-[20px] rounded-3xs bg-gray-200 w-[104px] h-[95px] overflow-hidden text-[inherit]"
          href="/invoices13"
        >
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
          <div className="absolute top-[63px] left-[25px] font-medium flex items-center justify-center w-[54px] h-3.5">
            Clients
          </div>
          <img
            className="absolute h-[37.89%] w-[44.74%] top-[17.89%] right-[26.42%] bottom-[44.21%] left-[28.85%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector3.svg"
          />
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[440px] left-[20px] rounded-3xs bg-gray-200 w-[104px] h-[95px] overflow-hidden text-[inherit]"
          href="/invoices14"
        >
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
          <div className="absolute top-[62px] left-[17px] font-medium flex items-center justify-center w-[70px] h-[15px]">
            Reports
          </div>
          <img
            className="absolute h-[37.89%] w-[27.69%] top-[16.84%] right-[35.77%] bottom-[45.26%] left-[36.54%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector4.svg"
          />
        </Link>
        <div className="absolute top-[545px] left-[20px] rounded-3xs bg-steelblue-100 w-[104px] h-[95px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
          <div className="absolute top-[62px] left-[17px] font-medium flex items-center justify-center w-[70px] h-[15px]">
            Stripe
          </div>
          <img
            className="absolute top-[16px] left-[34px] w-9 h-9 overflow-hidden"
            alt=""
            src="/teams.svg"
          />
        </div>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[125px] left-[21px] rounded-3xs bg-gray-200 w-[104px] h-[95px] overflow-hidden text-[inherit]"
          href="/invoices11"
        >
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
          <div className="absolute top-[63px] left-[16px] font-medium flex items-center justify-center w-[72px] h-3.5">
            Summary
          </div>
          <img
            className="absolute h-[37.89%] w-[27.69%] top-[17.89%] right-[35.77%] bottom-[44.21%] left-[36.54%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector5.svg"
          />
          <img className="relative w-0 h-0" alt="" />
        </Link>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[230px] left-[20px] rounded-3xs bg-gray-200 w-[104px] h-[95px] overflow-hidden text-[inherit]"
          href="/invoices12"
        >
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
          <div className="absolute top-[62px] left-[5px] font-medium flex items-center justify-center w-[94px] h-[15px]">
            Subscription
          </div>
          <img className="absolute h-[37.89%] w-[27.69%] top-[17.89%] right-[35.77%] bottom-[44.21%] left-[36.54%] max-w-full overflow-hidden max-h-full" alt="" src="/union.svg" />
          <img
            className="absolute h-[16.89%] w-[11.69%] top-[34.89%] right-[36.77%] bottom-[65.21%] left-[48.54%] overflow-hidden"
            alt=""
            src="/subtract1.svg"
          />
        </Link>
        <div className="absolute top-[20px] left-[20px] rounded-3xs bg-gray-200 w-[105px] h-[50px] overflow-hidden hidden text-left">
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
          <div className="absolute top-[15px] left-[32px] font-medium">
            Clients
          </div>
          <img
            className="relative w-[8.41px] h-3.5"
            alt=""
            src="/subtract2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Invoices15;
