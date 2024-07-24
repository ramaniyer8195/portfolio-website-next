export interface Experience {
  title: string;
  description: string;
  items: {
    company: string;
    position: string;
    duration: string;
  }[];
}

export interface Education {
  title: string;
  description: string;
  items: {
    instituion: string;
    degree: string;
    duration: string;
  }[];
}

export interface Skills {
  title: string;
  description: string;
  skillList: {
    name: string;
    icon: JSX.Element;
  }[];
}

export interface About {
  title: string;
  description: string;
  info: {
    fieldName: string;
    fieldValue: string;
  }[];
}
