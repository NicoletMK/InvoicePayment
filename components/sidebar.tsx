import "antd/dist/antd.min.css";
import React from 'react';
import { Button as MuiButton } from "@mui/material";
import Link from "next/link";


function SideBar() {
    return (
    <div>
      <div className="absolute top-[0px] left-[0px] bg-gray-300 w-full h-[100px] overflow-hidden font-inter">
        <div className="absolute top-[35px] left-[60px] w-[155px] h-[30px] text-lg-9">
            <img
                className="relative w-[29.99px] h-[30px]"
                alt=""
                src="/subtract.svg" />
            <div className="absolute top-[3.95px] left-[45.77px] w-[109.23px] h-[23.06px]">
                <b className="absolute top-[0px] left-[0px] flex items-center w-[109.23px] h-[23.06px]">
                    AgenciFlow
                </b>
            </div>
        </div>
        <img
            className="absolute top-[34px] left-[1324px] w-8 h-8 overflow-hidden"
            alt=""
            src="/mdibellnotificationoutline2.svg" />
        <img
            className="absolute top-[30px] left-[1428px] w-10 h-10"
            alt=""
            src="/group-340505.svg" />
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
                src="/icroundsearch1.svg" />
            <div className="absolute top-[16px] left-[50px] font-medium">
                Search
            </div>
        </div>
        <img
            className="absolute top-[34px] left-[1376px] w-8 h-8 overflow-hidden"
            alt=""
            src="/uiwsetting.svg" />
        <div className="absolute top-[0px] left-[0px] bg-gray-300 w-[1512px] h-[100px] overflow-hidden font-helvetica-neue">
            <a className="[text-decoration:none] absolute top-[31px] left-[1427px] w-[38px] h-[38px]">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro w-[38px] h-[38px]" />
                <img
                    className="absolute top-[0px] left-[0px] rounded-[50%] w-[38px] h-[38px] object-cover"
                    alt=""
                    src="/ellipse-889@2x.png" />
            </a>
            <div className="absolute top-[29px] left-[1164px] rounded-3xs bg-gray-200 w-[148px] h-[42px] overflow-hidden">
                <img
                    className="absolute h-[39.62%] w-[10.77%] top-[30.95%] right-[79.09%] bottom-[29.43%] left-[10.14%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector1.svg" />
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
                <MuiButton
                    className="absolute top-[35px] left-[710px]"
                    sx={{ width: 110 }}
                    variant="contained"
                    color="primary"
                >
                    Invoices
                </MuiButton>
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
                src="/notification.svg" />
            <img
                className="absolute h-[30%] w-[1.98%] top-[35%] right-[6.94%] bottom-[35%] left-[91.07%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/settings.svg" />
            <img
                className="absolute top-[32px] left-[60px] w-[86px] h-[35.44px]"
                alt=""
                src="/logo.svg" />
        </div>
    </div><div className="absolute top-[100px] left-[40px] rounded-xl box-border w-[145px] h-[660px] overflow-hidden text-center border-[2px] border-solid border-darkslategray-100">
            <div className="absolute top-[20px] left-[20px] rounded-3xs bg-steelblue-100 w-[104px] h-[95px] overflow-hidden">
                <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
                <div className="absolute top-[63px] left-[21px] font-medium flex items-center justify-center w-[62px] h-3.5">
                    Invoices
                </div>
                <img
                    className="absolute h-[37.89%] w-[34.61%] top-[17.89%] right-[32.7%] bottom-[44.21%] left-[32.69%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector2.svg" />
            </div>
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
                    src="/vector3.svg" />
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
                    src="/vector4.svg" />
            </Link>
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
                    src="/teams2.svg" />
            </Link>
            <Link
                className="cursor-pointer [text-decoration:none] absolute top-[125px] left-[21px] rounded-3xs bg-gray-200 w-[104px] h-[95px] overflow-hidden text-[inherit]"
                href="/invoices11"
            >
                <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
                <a className="[text-decoration:none] absolute top-[63px] left-[16px] font-medium text-[inherit] flex items-center justify-center w-[72px] h-3.5">
                    Summary
                </a>
                <img
                    className="absolute h-[37.89%] w-[27.69%] top-[17.89%] right-[35.77%] bottom-[44.21%] left-[36.54%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector5.svg" />
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
                <img className="absolute h-[37.89%] w-[27.69%] top-[17.89%] right-[35.77%] bottom-[44.21%] left-[36.54%] max-w-full overflow-hidden max-h-full" alt="" src="/union1.svg" />
                <img
                    className="absolute h-[16.89%] w-[11.69%] top-[34.89%] right-[36.77%] bottom-[65.21%] left-[48.54%] overflow-hidden"
                    alt=""
                    src="/subtract1.svg" />
            </Link>
            <div className="absolute top-[20px] left-[20px] rounded-3xs bg-gray-200 w-[105px] h-[50px] overflow-hidden hidden text-left">
                <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-steelblue-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-3 h-[60px] overflow-hidden hidden" />
                <div className="absolute top-[15px] left-[32px] font-medium">
                    Clients
                </div>
                <img
                    className="relative w-[8.41px] h-3.5"
                    alt=""
                    src="/subtract2.svg" />
                 </div>
             </div>
         </div>
    );
}

export default SideBar;

