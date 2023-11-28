import { ButtonHTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, TextareaHTMLAttributes } from "react";

// Cildren Interface
interface IChildren {
  children: React.ReactNode;
}

// Buttons Interface
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  extraClassConfig?: string;
  children: React.ReactNode;
}

interface ILink {
  extraClassConfig?: string;
  children: React.ReactNode;
  toLink: string;
}

// Inputs Interface
interface IInputsConfigs extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  errors?: string;
}

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  children?: React.ReactNode;
}

interface ILabel extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

// Form Login
interface ILogin {
  email: string;
  password: string;
}

// Form Register
interface IRegister {
  name: string;
  email: string;
  password: string;
  telephone: string;
}
interface IRegisterResponse {
  id: string;
  name: string;
  email: string;
  telephone: string;
  register_date: string;
}

// Form New Contact

interface IContact {
  name: string;
  telephone: string;
}

interface IContactOptional {
  name?: string;
  telephone?: string;
}

interface IContactList {
  id: string;
  name: string;
  telephone: string;
  register_date: string;
}

interface IContactUpdate {
  [key: string]: string | undefined;
}

// Form User Configs

interface IUserConfigs {
  name?: string;
  email?: string;
  password?: string;
  telephone?: string;
}

interface IUserUpdate {
  [key: string]: string | undefined;
}

export type {
  IChildren,
  IButton,
  IInputsConfigs,
  IInput,
  ITextArea,
  ILabel,
  ILink,
  ILogin,
  IRegister,
  IRegisterResponse,
  IContact,
  IContactOptional,
  IContactList,
  IContactUpdate,
  IUserConfigs,
  IUserUpdate,
};
