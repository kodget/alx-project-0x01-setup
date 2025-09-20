export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Geo {
  lat: number;
  lng: number;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: Geo;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: number | string;
  website: string;
  company: Company;
}
export interface UserProps {
  posts: User[];
}
