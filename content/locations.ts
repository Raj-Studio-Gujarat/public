export type Branch = {
  id: number;
  label: string;
  address: string;
};

export const branches: Branch[] = [
  {
    id: 1,
    label: "Maninagar (East)",
    address:
      "Shop No.1, Harshad Kunj Society, Nr. Laxminarayan Society, Laxminarayan, Maninagar (East), Ahmedabad",
  },
  {
    id: 2,
    label: "Ramol / CTM",
    address:
      "Shop No.4, Vaikunth Darshan Flat, Nr. Doon School, New Maninagar, Ramol, C.T.M, Ahmedabad",
  },
  {
    id: 3,
    label: "Ghodasar",
    address:
      "Shop No.1, Dhwani Flat, Nr. Bandhan Society, Cadila Road, Ghodasar, Ahmedabad",
  },
];
