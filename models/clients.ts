export interface IClient {
    id: number;
    name: string;
    email: string;
    details: string;
    type: "PERSON" | "ORGANIZATION";
  }