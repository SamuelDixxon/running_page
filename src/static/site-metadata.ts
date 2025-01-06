interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://github.com/SamuelDixxon',
  logo: 'https://static.soapcentral.com/editor/2024/09/dc884-17262004042678.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://github.com/SamuelDixxon/gitblog',
    },
    {
      name: 'About',
      url: 'https://github.com/SamuelDixxon/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
