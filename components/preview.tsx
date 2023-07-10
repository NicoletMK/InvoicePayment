import React from 'react';

interface PreviewProps {
  id: number;
  invoice_name: string;
  date: Date;
  quantity: number;
  price: number;
  total : number;
}

function Preview({ id, invoice_name, date, quantity, price, total }: PreviewProps) {
  const formattedDate = date ? date.toString() : '';

  return (
    <div className="absolute top-[78px] left-[707px] rounded-t-none rounded-br-xl rounded-bl-none bg-gray-300 box-border w-[550px] h-[806px] overflow-hidden text-lightslategray border-[2px] border-solid border-darkslategray-100">
      <div className="absolute top-[20px] left-[33px] w-[484px] h-[582px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-200 box-border w-[484px] h-[582px] overflow-hidden border-[1px] border-solid border-darkslategray-100">
          <div className="absolute top-[25px] left-[20px] w-[444px] h-[541px]">
            <img
              className="absolute top-[250px] left-[0px] w-[444px] h-0.5"
              alt=""
              src="/vector-75.svg"
            />
            <b className="absolute top-[158px] left-[118px] text-5xl text-gray-100">
              <p>Invoice from {invoice_name}</p>
            </b>
            <div className="absolute top-[192px] left-[109px]">
              <p>Invoice #{id} | {formattedDate}</p>
            </div>
            <div className="absolute top-[291px] left-[40px]">Summary</div>
            <div className="absolute top-[291px] left-[223px]">Price</div>
            <div className="absolute top-[291px] left-[300px]">Qty</div>
            <div className="absolute top-[291px] left-[366px]">Total</div>
            <div className="absolute top-[325px] left-[221px] text-gray-100">
              <p>$ {price}</p>
            </div>
            <div className="absolute top-[325px] left-[364px] text-gray-100">
              <p>$ {total}</p>
            </div>
            <div className="absolute top-[325px] left-[309px] text-gray-100">
              <p>{quantity}</p>
            </div>
            <img
              className="absolute top-[18px] left-[124px] rounded-3xs w-[195px] h-[122px] object-cover"
              alt=""
              src="/screenshot-20230222-at-819-1@2x.png"
            />
          </div>
          <img
            className="absolute top-[25px] left-[488px] w-8 h-8 overflow-hidden"
            alt=""
            src="/materialsymbolsmorevert.svg"
          />
          <div className="absolute top-[478px] left-[150px] flex flex-row items-center justify-start gap-[15px] text-xl text-gray-100">
            <div className="relative"><p>Total Amount: $ {total}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
