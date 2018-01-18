import moment from "moment";

const data = [
  {
    version: "v1",
    releaseStart: moment(new Date(2011, 6, 1)),
    releaseEnd: moment(new Date(2011, 9, 1)),
    bugsStart: null,
    bugsEnd: null,
    securityStart: null,
    securityEnd: null
  },
  {
    version: "v2",
    releaseStart: moment(new Date(2011, 9, 1)),
    releaseEnd: moment(new Date(2012, 2, 1)),
    bugsStart: null,
    bugsEnd: null,
    securityStart: null,
    securityEnd: null
  },
  {
    version: "v3",
    releaseStart: moment(new Date(2012, 2, 1)),
    releaseEnd: moment(new Date(2013, 5, 1)),
    bugsStart: null,
    bugsEnd: null,
    securityStart: null,
    securityEnd: null
  },
  {
    version: "v4",
    releaseStart: moment(new Date(2013, 5, 1)),
    releaseEnd: moment(new Date(2015, 2, 4)),
    bugsStart: null,
    bugsEnd: null,
    securityStart: null,
    securityEnd: null
  },
  {
    version: "v5",
    releaseStart: moment(new Date(2015, 2, 4)),
    releaseEnd: moment(new Date(2015, 6, 9)),
    bugsStart: null,
    bugsEnd: null,
    securityStart: null,
    securityEnd: null
  },
  {
    version: "v5.1 LTS",
    releaseStart: moment(new Date(2015, 6, 9)),
    releaseEnd: moment(new Date(2015, 12, 21)),
    bugsStart: moment(new Date(2015, 12, 21)),
    bugsEnd: moment(new Date(2017, 6, 1)),
    securityStart: moment(new Date(2017, 6, 1)),
    securityEnd: moment(new Date(2018, 6, 1))
  },
  {
    version: "v5.2",
    releaseStart: moment(new Date(2015, 12, 21)),
    releaseEnd: moment(new Date(2016, 8, 23)),
    bugsStart: moment(new Date(2016, 8, 23)),
    bugsEnd: moment(new Date(2017, 3, 23)),
    securityStart: moment(new Date(2017, 3, 23)),
    securityEnd: moment(new Date(2017, 8, 23))
  },
  {
    version: "v5.3",
    releaseStart: moment(new Date(2016, 8, 23)),
    releaseEnd: moment(new Date(2017, 1, 24)),
    bugsStart: moment(new Date(2017, 1, 24)),
    bugsEnd: moment(new Date(2017, 6, 24)),
    securityStart: moment(new Date(2017, 6, 24)),
    securityEnd: moment(new Date(2018, 1, 24))
  },
  {
    version: "v5.4",
    releaseStart: moment(new Date(2017, 1, 24)),
    releaseEnd: moment(new Date(2017, 8, 30)),
    bugsStart: moment(new Date(2017, 8, 30)),
    bugsEnd: moment(new Date(2018, 3, 24)),
    securityStart: moment(new Date(2018, 3, 24)),
    securityEnd: moment(new Date(2018, 8, 30))
  },
  {
    version: "v5.5 LTS",
    releaseStart: moment(new Date(2017, 8, 30)),
    releaseEnd: moment(new Date()),
    bugsStart: null,
    bugsEnd: null,
    securityStart: null,
    securityEnd: null
  }
];

export default data;
