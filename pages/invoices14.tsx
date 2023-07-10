import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Button as MuiButton } from "@mui/material";
import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Link from "next/link";
import DropdownMenu from "../components/dropdown";

const Invoices14: NextPage = () => {
  return (
    <div className="relative bg-gray-300 w-full h-[1024px] overflow-hidden text-left text-base text-gray-100 font-helvetica-neue">
      <div className="absolute top-[100px] left-[215px] rounded-xl bg-gray-200 box-border w-[1257px] h-[884px] overflow-hidden text-17xl border-[2px] border-solid border-darkslategray-100">
        <div className="absolute top-[0px] left-[0px] rounded-tl-xl rounded-tr-none rounded-b-none bg-gray-200 box-border w-[1257px] h-20 overflow-hidden border-[2px] border-solid border-darkslategray-100">
          <b className="absolute top-[18px] left-[40px]">Reports</b>
        </div>
        <div className="absolute top-[100px] left-[40px] w-[1177px] h-[764px] text-right text-5xl text-lightslategray">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-300 box-border w-[1177px] h-[764px] overflow-hidden text-left text-sm text-gray-100 border-[1px] border-solid border-darkslategray-100">
            <div className="absolute top-[190px] left-[259px]" />
            <div className="absolute top-[681.5px] left-[113.5px] box-border w-[716px] h-px border-t-[1px] border-solid border-darkslategray-100" />
            <div className="absolute top-[188px] left-[142px] box-border w-1 h-[495px] border-r-[4px] border-solid border-darkslategray-100" />
            <div className="absolute top-[189px] left-[382px] box-border w-1 h-[495px] border-r-[4px] border-solid border-steelblue-100" />
            <div className="absolute top-[181px] left-[382px] box-border w-5 h-[511px] border-r-[20px] border-solid border-steelblue-200" />
            <div className="absolute top-[188px] left-[622px] box-border w-1 h-[495px] border-r-[4px] border-solid border-darkslategray-100" />
            <div className="absolute top-[189px] left-[202px] box-border w-1 h-[495px] border-r-[4px] border-solid border-darkslategray-100" />
            <div className="absolute top-[190px] left-[442px] box-border w-1 h-[495px] border-r-[4px] border-solid border-darkslategray-100" />
            <div className="absolute top-[189px] left-[682px] box-border w-1 h-[495px] border-r-[4px] border-solid border-darkslategray-100" />
            <div className="absolute top-[189px] left-[262px] box-border w-1 h-[495px] border-r-[4px] border-solid border-darkslategray-100" />
            <div className="absolute top-[190px] left-[502px] box-border w-1 h-[495px] border-r-[4px] border-solid border-darkslategray-100" />
            <div className="absolute top-[189px] left-[742px] box-border w-1 h-[495px] border-r-[4px] border-solid border-darkslategray-100" />
            <div className="absolute top-[189px] left-[322px] box-border w-1 h-[495px] border-r-[4px] border-solid border-darkslategray-100" />
            <div className="absolute top-[190px] left-[562px] box-border w-1 h-[495px] border-r-[4px] border-solid border-darkslategray-100" />
            <div className="absolute top-[189px] left-[802px] box-border w-1 h-[495px] border-r-[4px] border-solid border-darkslategray-100" />
            <div className="absolute top-[179px] left-[81px] w-[735px] h-[527px]">
              <div className="absolute top-[510px] left-[50px]">Mar</div>
              <div className="absolute top-[494px] left-[8px]">$0</div>
              <div className="absolute top-[395px] left-[0px] text-right">
                $10
              </div>
              <div className="absolute top-[296px] left-[0px] text-right">
                $20
              </div>
              <div className="absolute top-[198px] left-[0px] text-right">
                $30
              </div>
              <div className="absolute top-[99px] left-[0px] text-right">
                $40
              </div>
              <div className="absolute top-[0px] left-[0px] text-right">
                $50
              </div>
              <div className="absolute top-[510px] left-[113px]">Arr</div>
              <div className="absolute top-[510px] left-[169px]">May</div>
              <div className="absolute top-[510px] left-[231px]">Jun</div>
              <div className="absolute top-[510px] left-[293px]">Jul</div>
              <div className="absolute top-[510px] left-[350px]">Aug</div>
              <div className="absolute top-[510px] left-[410px]">Sep</div>
              <div className="absolute top-[510px] left-[471px]">Oct</div>
              <div className="absolute top-[510px] left-[530px]">Nov</div>
              <div className="absolute top-[510px] left-[590px]">Dec</div>
              <div className="absolute top-[510px] left-[651px]">Jan</div>
              <div className="absolute top-[510px] left-[711px]">Feb</div>
            </div>
            <div className="absolute top-[258px] left-[397px] rounded-3xs bg-darkslategray-200 w-[84px] h-[59px] overflow-hidden">
              <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
              <div className="absolute top-[95px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-2 h-20 overflow-hidden [transform:_rotate(-90deg)] [transform-origin:0_0]" />
              <div className="absolute top-[10px] left-[15px] w-[54px] h-[39px]">
                <div className="absolute top-[22px] left-[13px] font-medium">
                  USD 0
                </div>
                <b className="absolute top-[0px] left-[0px]">Jul</b>
                <div className="absolute top-[27px] left-[0px] rounded-[50%] bg-steelblue-100 w-2 h-2" />
              </div>
            </div>
          </div>
          <div className="absolute top-[123px] left-[479px] w-[147px] h-[21px]" />
          <DropdownMenu />
          <div className="absolute top-[179px] left-[981px] w-[735px] h-[527px]">
            <div className="absolute top-[0px] left-[0px] text-left">Total Received</div>
            <b className="absolute top-[34px] left-[0px] text-23xl text-steelblue-100 text-left">
              $0.00
            </b>
          </div>
          <div className="absolute top-[279px] left-[981px] w-[735px] h-[527px]">
            <div className="absolute top-[0px] left-[0px] text-left">This Year</div>
            <b className="absolute top-[34px] left-[0px] text-23xl text-steelblue-100 text-left">
              $0.00
            </b>
          </div>
          <div className="absolute top-[479px] left-[981px] w-[735px] h-[527px]">
            <div className="absolute top-[0px] left-[0px] text-left">Last Month</div>
            <b className="absolute top-[34px] left-[16px] text-23xl text-steelblue-100 text-left">
              $0.00
            </b>
          </div>
          <div className="absolute top-[379px] left-[981px] w-[735px] h-[527px]">
            <div className="absolute top-[0px] left-[0px] text-left">This Month</div>
            <b className="absolute top-[34px] left-[16px] text-23xl text-steelblue-100 text-left">
              $0.00
            </b>
          </div>
        </div>
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
          src="/group-340501.svg"
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
        <div className="absolute top-[0px] left-[0px] bg-gray-300 w-[1512px] h-[100px] overflow-hidden text-center font-helvetica-neue">
          <a className="[text-decoration:none] absolute top-[31px] left-[1427px] w-[38px] h-[38px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro w-[38px] h-[38px]" />
            <img
              className="absolute top-[0px] left-[0px] rounded-[50%] w-[38px] h-[38px] object-cover"
              alt=""
              src="/ellipse-889@2x.png"
            />
          </a>
          <InputGroup
            className="bg-[transparent] absolute top-[29px] left-[1164px]"
            width="148px"
            w="148px"
          >
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <ChakraInput
              variant="outline"
              textColor="rgba(26, 32, 43, 0.04)"
              placeholder="Search"
            />
          </InputGroup>
          <div className="absolute top-[1px] left-[180px] w-[955px] h-[100px] overflow-hidden">
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
            <MuiButton
              className="absolute top-[35px] left-[710px]"
              sx={{ width: 110 }}
              variant="contained"
              color="primary"
              href="/invoices"
            >
              Invoices
            </MuiButton>
            <a className="[text-decoration:none] absolute top-[35px] left-[825px] rounded-md w-[110px] h-[30px] overflow-hidden text-[inherit]">
              <div className="absolute top-[5px] left-[0px] w-[110px] h-5">
                <a className="[text-decoration:none] absolute top-[0px] left-[0px] font-medium text-[inherit] flex items-center justify-center w-[110px]">
                  AI Assistant
                </a>
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
            src="/settings1.svg"
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
        <div className="absolute top-[440px] left-[20px] rounded-3xs bg-steelblue-100 w-[104px] h-[95px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
          <div className="absolute top-[62px] left-[17px] font-medium flex items-center justify-center w-[70px] h-[15px]">
            Reports
          </div>
          <img
            className="absolute h-[37.89%] w-[27.69%] top-[16.84%] right-[35.77%] bottom-[45.26%] left-[36.54%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector4.svg"
          />
        </div>
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[545px] left-[20px] rounded-3xs bg-gray-200 w-[104px] h-[95px] overflow-hidden text-[inherit]"
          href="/invoices15"
        >
          <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
          <div className="absolute top-[62px] left-[17px] font-medium flex items-center justify-center w-[70px] h-[15px]">
            Stripe
          </div>
          <img
            className="absolute top-[16px] left-[34px] w-9 h-9 overflow-hidden"
            alt=""
            src="/teams1.svg"
          />
        </Link>
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

export default Invoices14;
