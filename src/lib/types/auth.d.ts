

declare type app_metadata = {
  provider: string;
  providers: string[];
};

declare type user_metadata = {
  email: string;
  email_verified: boolean;
  phone_verified: boolean;
  sub: string;
};
declare type identity = {
  identity_id: string;
  id: string;
  user_id: string;
  identity_data: object[];
  provider: string;
  last_sign_in_at: string;
  created_at: string;
  updated_at: string;
  email: string;
};

//user type returned from data base
declare type user = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: app_metadata;
  user_metadata: user_metadata;
  identities: identity[];
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
};
