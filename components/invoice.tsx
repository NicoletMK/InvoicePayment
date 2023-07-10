import { useForm } from "@mantine/form";
import React from 'react';
import { useLocalStorage } from "@mantine/hooks";
import { Icon, TextField } from "@mui/material";
import { Button } from "antd";
import { InvoiceType, PaymentFrequency, Currency, IInvoiceItem, IInvoiceHistory, IInvoiceBase } from "../models/invoice";
import { IPaperProps } from "../types/mantine-types";
import Preview, { PreviewProps } from '../components/preview';

interface InvoiceFormProps extends PreviewProps {
  id: any;
  onSubmit: (values: InvoiceFormProps) => void;
  invoice_type: InvoiceType;
  payfreq: PaymentFrequency;
  currency: Currency;
  client_name: string;
  client_email: string;
  client_details: string;
  service_disc: string;
  quantity: number;
  price: number;
  total: number;
  date: Date;
  invoice_name: string;
  invoice_items: IInvoiceItem[];
  isPaid: boolean;
}

function InvoiceForm({ onSubmit, id, invoice_name, date, quantity, price, total }: InvoiceFormProps) {
  const form = useForm<InvoiceFormProps>({
    initialValues: {
      id: Math.floor(Math.random() * 100000),
      invoice_type: InvoiceType.ONE_TIME_PAYMENT,
      payfreq: PaymentFrequency.MONTHLY,
      currency: Currency.USD,
      client_name: "",
      client_email: "",
      client_details: "",
      service_disc: "",
      quantity: quantity, // Use the provided value here
      price: price,
      total: quantity * price,
      date: new Date(),
      invoice_name: "",
      invoice_items: [],
      isPaid: false,
    },
  });

  const [formValues, setFormValues] = React.useState(form.values);

  const handleSaveClick = () => {
    // Logic for handling the save click event
    console.log("Save clicked");
  };

  const handleFormSubmit = (values: InvoiceFormProps): void => {
    const { quantity, price } = values;
    const total = quantity * price;
    setFormValues({
      ...values,
      total: total,
    });
  };
  
  const handleSelectCurrency = (currency: string) => {
    setFormValues({ ...formValues, currency });
  };

  return (
    <form onSubmit={form.onSubmit(handleFormSubmit)}>
      <Preview
        id={form.values.id}
        invoice_name={form.values.invoice_name}
        date={form.values.date}
        quantity={form.values.quantity}
        price={form.values.price}
        total={form.values.total}
      />


            <TextField
              className="[border:none] bg-[transparent] absolute top-[593px] left-[0px]"
              sx={{ width: 227 }}
              color="primary"
              variant="outlined"
              type="text"
              label="Service Description"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              {...form.getInputProps("service_disc")}
            />
            <div className="absolute top-[569px] left-[0px]">
              Service Description
            </div>
            <Button
              className="absolute top-[658px] left-[0px]"
              color="bg-steelblue-100"
              href="localhost:3000"
            >
              Add another item
            </Button>
            <div className="absolute top-[570px] left-[248px]">Quantity</div>
            <div className="absolute top-[570px] left-[347px]">Price</div>
            <div className="absolute top-[569px] left-[450px]">Total</div>
            <TextField
              className="[border:none] bg-[transparent] absolute top-[594px] left-[247px]"
              sx={{ width: 80 }}
              color="primary"
              variant="outlined"
              type="text"
              size="medium"
              margin="none"
              {...form.getInputProps("quantity")}
            />
            <TextField
              className="[border:none] bg-[transparent] absolute top-[594px] left-[347px]"
              sx={{ width: 80 }}
              color="primary"
              variant="outlined"
              type="text"
              size="medium"
              margin="none"
              {...form.getInputProps("price")}      
              />
              <TextField
                className="[border:none] bg-[transparent] absolute top-[593px] left-[447px]"
                sx={{ width: 80 }}
                color="primary"
                variant="outlined"
                type="text"
                size="medium"
                margin="none"
                value={form.values.quantity * form.values.price}
              />
            <div className="absolute top-[257px] left-[361px] w-[109px] h-[21px]" />
                <div className="absolute top-[183px] left-[0px] w-[573px] h-[239px] text-5xl">
                    <b className="absolute top-[0px] left-[0px]">Client</b>
                    <b className="absolute top-[0px] left-[346px]">Invoice</b>
                 
                    <TextField
                      className="[border:none] bg-[transparent] absolute top-[39px] left-[0px]"
                      sx={{ width: 227 }}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Client Name"
                      placeholder="Placeholder"
                      size="medium"
                      margin="none"
                      {...form.getInputProps("client_name")}
                    />
                    <TextField
                      className="[border:none] bg-[transparent] absolute top-[39px] left-[346px]"
                      sx={{ width: 227 }}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Invoice From"
                      size="medium"
                      margin="none"
                      {...form.getInputProps("invoice_name")}
                    />
                    <TextField
                      className="[border:none] bg-[transparent] absolute top-[99px] left-[0px]"
                      sx={{ width: 227 }}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Client Email"
                      placeholder="Placeholder"
                      size="medium"
                      margin="none"
                      {...form.getInputProps("invoice_email")}
                    />
                    <TextField
                      className="[border:none] bg-[transparent] absolute top-[159px] left-[0px]"
                      sx={{ width: 227 }}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Client Details (Optional)"
                      placeholder="Placeholder"
                      size="medium"
                      margin="none"
                      {...form.getInputProps("client-details")}
                    />
                    <TextField
                      className="[border:none] bg-[transparent] absolute top-[99px] left-[346px]"
                      sx={{ width: 227 }}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Invoice Details (Optional)"
                      placeholder="Placeholder"
                      size="medium"
                      margin="none"
                      {...form.getInputProps("client-details")}
                    />  
                </div> 
                <div className="absolute top-[659px] left-[395px] flex flex-row items-center justify-start gap-[15px] text-l">
                    <div className="relative">Amount Due</div>
                    <b className="relative">${form.values.quantity * form.values.price}</b>
               </div>
        </form>  
      );
  }
  export default InvoiceForm;    