import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import {
  Button,
  Icon,
  TextField,
  FormControlLabel,
  Radio,
  InputAdornment,
} from "@mui/material";
import DropdownMenu from "../components/dropdown";
import InvoiceForm from "../components/invoice";
import SideBar from "../components/sidebar";
import Preview from "../components/preview";
import React, { useState } from 'react';
import { InvoiceType, PaymentFrequency, Currency } from "../models/invoice";
import form from "antd/lib/form";

interface InvoiceFormValues extends InvoiceFormProps {
  formValues: InvoiceFormValues;
  currency: Currency; 
  date: Date;
}

const Invoices: NextPage = () => {
  const [formValues, setFormValues] = useState<InvoiceFormProps>({
    // Set initial form values
    id: Math.floor(Math.random() * 100000),
    invoice_type: InvoiceType.ONE_TIME_PAYMENT,
    payfreq: PaymentFrequency.MONTHLY,
    currency: Currency.USD,
    client_name: '',
    client_email: '',
    client_details: '',
    service_disc: '',
    quantity: 0,
    price: 0,
    total: 0,
    date: new Date(),
    invoice_name: '',
    invoice_items: [],
    isPaid: false,
  });

  function handleSaveClick() {
    // Logic for handling the save click event
    console.log("Save clicked");
  }

  function handleFormSubmit(): void {
    // Logic for handling the form submission
    const values = form.values; // Retrieve the form values
    setFormValues({
      ...formValues,  
      currency: formValues.currency,
      date: new Date(),
    });
  }

  function handleSelectCurrency(currency: string) {
    setFormValues({ ...formValues, currency });
  }
  return (
    <div className="relative bg-gray-300 w-full h-[1024px] overflow-hidden text-left text-base text-gray-100 font-helvetica-neue">
        <div className="absolute top-[100px] left-[215px] rounded-xl bg-gray-200 box-border w-full h-[884px] overflow-hidden border-[2px] border-solid border-darkslategray-100">
          <div className="absolute top-[0px] left-[0px] rounded-tl-xl rounded-tr-none rounded-b-none bg-gray-200 box-border w-[709px] h-20 overflow-hidden text-17xl border-[2px] border-solid border-darkslategray-100">
            <b className="absolute top-[18px] left-[40px]">Create Invoice</b>
            <div className="absolute top-[62px] left-[458px] w-6 h-6 overflow-hidden" />
            <Button
              className="absolute top-[19px] left-[372px]"
              
              variant="outlined"
              color="primary"
              startIcon={<Icon>camera_alt_sharp</Icon>}
              onClick={handleSaveClick}
            >
              Save
            </Button>
            <Button
              className="absolute top-[19px] left-[496px]"
              
              variant="contained"
              color="primary"
              startIcon={<Icon>send_sharp</Icon>}
              onClick={handleFormSubmit}
            >
              Send Invoice
            </Button>
          </div>

          <div className="absolute top-[0px] left-[707px] bg-gray-200 box-border w-[550px] h-20 overflow-hidden text-5xl border-[2px] border-solid border-darkslategray-100">
            <b className="absolute top-[26px] left-[30px]">Preview Invoice</b>
          </div>
          <div className="absolute top-[100px] left-[33px] w-full h-[764px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-300 box-border w-[641px] h-[764px] overflow-hidden border-[1px] border-solid border-darkslategray-100">
              <div className="absolute top-[25px] left-[27px] w-[573px] h-[719px]">
                <b className="absolute top-[530px] left-[0px] text-5xl">
                  Invoice Description
                </b>


                <InvoiceForm onSubmit={handleFormSubmit} {...formValues} />


              <div className="absolute top-[467px] left-[4px] text-xs text-lightslategray flex items-center w-[286px]">
                <span className="[line-break:anywhere] w-full">
                  <span>{`Automatically pay invoice with the card on file for this client. Note: only works for the clients who have already paid through AgenciFlow. `}</span>
                </span>

              </div>
              <div className="absolute top-[439px] left-[399px] text-lightslategray">
                Remove Payment
              </div>

              <div className="absolute top-[-5px] left-[0px] w-[576px] h-[168px] text-5xl">
                <b className="absolute top-[0px] left-[0px]">Type</b>
                <b className="absolute top-[0px] left-[346px]">Currency</b>
                <FormControlLabel
                  className="absolute top-[39px] left-[0px]"
                  label="Single Invoice"
                  labelPlacement="end"
                  control={<Radio color="primary" checked size="small" />}
                />

              <div  className="absolute top-[39px] left-[346px]">
                <DropdownMenu onSelectCurrency={handleSelectCurrency} /> 
              </div>

                <FormControlLabel
                  className="absolute top-[99px] left-[0px]"
                  label="Retainers"
                  labelPlacement="end"
                  control={<Radio color="primary" checked size="small" />}
                />
                <TextField
                  className="[border:none] bg-[transparent] absolute top-[99px] left-[346px]"
                  
                  color="info"
                  variant="standard"
                  type="date"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon>calendar_today_sharp</Icon>
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                  margin="none"
                  value={formValues.date.toISOString().split('T')[0]} // Extracting the date part
              onChange={(event) => {
                const selectedDate = new Date(event.target.value);
                setFormValues({ ...formValues, date: selectedDate });
              }}
                />
                <div className="absolute top-[154px] left-[3px] text-xs text-lightslategray flex items-center w-[227px]">
                  (Invoice sent quarterly, monthly or weekly)
                </div>
                <div className="absolute top-[154px] left-[349px] w-[227px] h-3.5 text-xs text-lightslategray">
                  <div className="absolute top-[0px] left-[0px] flex items-center w-[227px]">
                    Due Date
                  </div>
                </div>
              </div>
              <img
                className="absolute h-[3.89%] w-[4.36%] top-[84.01%] right-[1.05%] bottom-[12.1%] left-[94.59%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector10.svg"
              />
            </div>

            <div className="absolute top-[190px] left-[259px]" />
            <div className="absolute top-[452px] left-[31px] w-[115px] h-10 text-lightslategray">
              <div className="absolute top-[11px] left-[50px]">AutoPay</div>
              <img
                className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
                alt=""
                src="/toggle.svg"
              />
            </div>

            <img
              className="absolute top-[453px] left-[376px] w-10 h-10 overflow-hidden"
              alt=""
              src="/toggle1.svg"
            />
            <div className="absolute h-[calc(100%_-_125px)] top-[25px] right-[15px] bottom-[100px] w-[11px] overflow-hidden">
              <div className="absolute top-[1px] left-[1px] rounded-9xs-5 bg-gray-200 box-border w-[9px] h-[413px] border-[1px] border-solid border-gray-400" />
            </div>
          </div>
        </div>
        <Preview formValues={formValues}  />
      </div>
       <SideBar />
    </div>
  );
}

export default Invoices;