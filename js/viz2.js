var diseaseDescriptionMap = {"LOA": "Leber optic atrophy is a mitochondrial genetic disease that causes blindness during young adult life, typically, males.",
                            "BC": "Breast cancer is cancer that forms in cells of the breast. ",
                            "NO": "Neoplasm is an abnormal growth of tissue on the ovary, caused by the rapid division of cells that have undergone some form of mutation.",
                            "BP": "Brain pseudoatrophy is an apparent decrease in volume of cortical tissue in the brain.",
                            "PD": "Parkinson's disease is a degenerative disorder of the central nervous system mainly affecting the motor system.",
                            "JM": "Juvenile myopathy is a presumed autoimmune dysfunction in children, resulting in muscle weakness among other complications.",
                            "LD": "Leigh's disease is a rare inherited neurometabolic disorder that affects the central nervous system. It can be caused by mutations in mitochondrial DNA.",
                            "COD": "Cytochrome c oxidase deficiency is a rare inherited metabolic disorder that can affect several parts of the body, including the muscles used for movement, the heart, the brain, or the liver.",
                            "CM": "Cardiomyopathy is the measurable deterioration of the ability of the heart muscle to contract, usually leading to heart failure.",
                            "SDM": "Sensorineural hearing loss is a type of deafness which occurs when there is damage to the inner ear, or to the nerve pathways from the inner ear to the brain.",
                            "HCM": "Hypertrophic cardiomyopathy is a disease in which the heart muscle becomes abnormally thick, making it harder for the heart to pump blood.",
                            "DF": "Hearing loss, or deafness, is a partial or total inability to hear. Deafness may occur in one or both ears.",
                            "SIDS": "Sudden infant death syndrome is the sudden unexplained death of a child less than one year of age, usually occuring during sleep.",
                            "OB": "Obesity is a medical condition associated with excess body fat which might have a negative effect on health."
                            }

var populationMap = {"ACB": "African Caribbean in Barbados",
                     "BEB": "Bengali in Bangladesh",
                     "CDX": "Chinese Dai in Xishuangbanna, China",
                     "CHS": "Southern Han Chinese, China",
                     "CLM": "Colombian in Medellin, Colombia",
                     "ESN": "Esan in Nigeria",
                     "FIN": "Finnish in Finland",
                     "GBR": "British in England and Scotland",
                     "GWD": "Gambian in Western Division, The Gambia",
                     "IBS": "Iberian populations in Spain",
                     "KHV": "Kinh in Ho Chi Minh City, Vietnam",
                     "MSL": "Mende in Sierra Leone",
                     "PEL": "Peruvian in Lima, Peru",
                     "PJL": "Punjabi in Lahore,Pakistan",
                     "PUR": "Puerto Rican in Puerto Rico"
                    }
var LOA = [
  {
    "name": "Leber's Optic Atrophy",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.m.wikipedia.org/wiki/Leber's_hereditary_optic_neuropathy",
    "children": [
      {
        "name": "CYTB",
        "parent": "Leber's Optic Atrophy",
        "color": "#1f77b4",
        "lightcolor": "#aec7e8",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/Cytochrome_b",
        "children": [
          {
            "name": "chrMT-15257-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/41518645"
          },
          {
            "name": "chrMT-15812-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/200336777"
          },
          {
            "name": "chrMT-14831-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199795644"
          }
        ]
      },
      {
        "name": "ND1",
        "parent": "Leber's Optic Atrophy",
        "color": "#ff7f0e",
        "lightcolor": "#ffbb78",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/MT-ND1",
        "children": [
          {
            "name": "chrMT-4216-C",
            "parent": "ND1",
            "color": "#ff7f0e",
            "lightcolor": "#ffbb78",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/1599988"
          },
          {
            "name": "chrMT-3394-C",
            "parent": "ND1",
            "color": "#ff7f0e",
            "lightcolor": "#ffbb78",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/41460449"
          },
          {
            "name": "chrMT-4136-G",
            "parent": "ND1",
            "color": "#ff7f0e",
            "lightcolor": "#ffbb78",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199476121"
          }]},
           {
          "name": "ND2",
          "parent": "Leber's Optic Atrophy",
          "color": "#2ca02c",
          "lightcolor": "#98df8a",
          "type": "gene",
          "link": "https://en.m.wikipedia.org/wiki/MT-ND2",
          "children": [
            {
              "name": "chrMT-4917-G",
              "parent": "ND2",
              "color": "#2ca02c",
              "lightcolor": "#98df8a",
              "type": "mutation",
              "link": "http://www.ncbi.nlm.nih.gov/snp/28357980"
            }
            ]},
            {
          "name": "ND3",
          "parent": "Leber's Optic Atrophy",
          "color": "#8c564b",
          "lightcolor": "#c49c94",
          "type": "gene",
          "link": "https://en.m.wikipedia.org/wiki/MT-ND3",
          "children": [
            {
              "name": "chrMT-10237-C",
              "parent": "ND3",
              "color": "#8c564b",
              "lightcolor": "#c49c94",
              "type": "mutation",
              "link": "http://www.ncbi.nlm.nih.gov/snp/193302927"
            }
            ]},
            {
          "name": "ND4",
          "parent": "Leber's Optic Atrophy",
          "color": "#e377c2",
          "lightcolor": "#f7b6d2",
          "type": "gene",
          "link": "https://en.m.wikipedia.org/wiki/MT-ND4",
          "children": [
            {
              "name": "chrMT-11253-C",
              "parent": "ND4",
              "color": "#e377c2",
              "lightcolor": "#f7b6d2",
              "type": "mutation",
              "link": "http://www.ncbi.nlm.nih.gov/snp/200145866"
            }
            ]},
      {
        "name": "ND5",
        "parent": "Leber's Optic Atrophy",
        "color": "#9467bd",
        "lightcolor": "#c5b0d5",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/MT-ND5",
        "children": [
          {
            "name": "chrMT-13708-A",
            "parent": "ND5",
            "color": "#9467bd",
            "lightcolor": "#c5b0d5",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/28359178"
          },
          {
            "name": "chrMT-12811-C",
            "parent": "ND5",
            "color": "#9467bd",
            "lightcolor": "#c5b0d5",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199974018"
          },
          {
            "name": "chrMT-12338-C",
            "parent": "ND5",
            "color": "#9467bd",
            "lightcolor": "#c5b0d5",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/201863060"
          },
          {
            "name": "chrMT-13637-G",
            "parent": "ND5",
            "color": "#9467bd",
            "lightcolor": "#c5b0d5",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/200855215"
          }]},
          {
        "name": "COX3",
        "parent": "Leber's Optic Atrophy",
        "color": "#7f7f7f",
        "lightcolor": "#c7c7c7",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/COX-3",
        "children": [
          {
            "name": "chrMT-9438-A",
            "parent": "COX3",
            "color": "#7f7f7f",
            "lightcolor": "#c7c7c7",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/267606611"
          },
          {
            "name": "chrMT-9804-A",
            "parent": "COX3",
            "color": "#7f7f7f",
            "lightcolor": "#c7c7c7",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/200613617"
          }]}
    ]
  }
];

var BC = [{
    "name": "Breast Cancer",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.m.wikipedia.org/wiki/Breast_cancer",
    "children": [
      {
        "name": "CYTB",
        "parent": "Breast Cancer",
        "color": "#1f77b4",
        "lightcolor": "#aec7e8",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/Cytochrome_b",
        "children": [
          {
            "name": "chrMT-15326-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/2853508"
          },
          {
            "name": "chrMT-14905-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236203"
          },
          {
            "name": "chrMT-15553-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236189"
          },
          {
            "name": "chrMT-15323-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236177"
          },
          {
            "name": "chrMT-15758-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236193"
          },
          {
            "name": "chrMT-14783-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236042"
          },
          {
            "name": "chrMT-15301-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236045"
          },
          {
            "name": "chrMT-15784-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236194"
          },
          {
            "name": "chrMT-15001-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236169"
          },
          {
            "name": "chrMT-15355-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236181"
          },
          {
            "name": "chrMT-15346-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236180"
          },
          {
            "name": "chrMT-15458-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236185"
          },
          {
            "name": "chrMT-15226-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236174"
          },
          {
            "name": "chrMT-15470-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236187"
          },
          {
            "name": "chrMT-14968-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236167"
          },
          {
            "name": "chrMT-14935-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236204"
          },
          {
            "name": "chrMT-15049-T",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236170"
          },
          {
            "name": "chrMT-15287-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236044"
          },
          {
            "name": "chrMT-15682-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236192"
          },
          {
            "name": "chrMT-15289-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236175"
          }
        ]
      }
    ]
  }
];

var NO = [{
    "name": "Neoplasm of Ovary",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.m.wikipedia.org/wiki/Neoplasm",
    "children": [
      {
        "name": "CYTB",
        "parent": "Neoplasm of Ovary",
        "color": "#1f77b4",
        "lightcolor": "#aec7e8",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/Cytochrome_b",
        "children": [
          {
            "name": "chrMT-15607-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236210"
          },
          {
            "name": "chrMT-15314-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236176"
          },
          {
            "name": "chrMT-15511-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236188"
          },
          {
            "name": "chrMT-15670-C",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236211"
          },
          {
            "name": "chrMT-15431-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236208"
          },
          {
            "name": "chrMT-15148-A",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236206"
          },
          {
            "name": "chrMT-15328-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236178"
          },
          {
            "name": "chrMT-15061-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236205"
          },
          {
            "name": "chrMT-15098-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236172"
          },
          {
            "name": "chrMT-14743-G",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236161"
          },
          {
            "name": "chrMT-15259-T",
            "parent": "CYTB",
            "color": "#1f77b4",
            "lightcolor": "#aec7e8",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/527236207"
          }
          ]
        }
        ]
      }
      ];

var BP = [{
    "name": "Brain Pseudoatrophy",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "http://medical-dictionary.thefreedictionary.com/pseudoatrophy+of+brain",
    "children": [
      {
        "name": "ATP8",
        "parent": "Brain Pseudoatrophy",
        "color": "#d62728",
        "lightcolor": "#ff9896",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/MT-ATP8",
        "children": [
          {
            "name": "chrMT-8393-T",
            "parent": "ATP8",
            "color": "#d62728",
            "lightcolor": "#ff9896",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/121434446"
          }
          ]
        }
        ]
      }];
  
  var PD = [{
    "name": "Parkinson's Disease",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.m.wikipedia.org/wiki/Parkinson's_disease",
    "children": [
      {
        "name": "ND3",
        "parent": "Parkinson's Disease",
        "color": "#8c564b",
        "lightcolor": "#c49c94",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/MT-ND3",
        "children": [
          {
            "name": "chrMT-10398-G",
            "parent": "ND3",
            "color": "#8c564b",
            "lightcolor": "#c49c94",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/2853826"
          }
          ]
        }
        ]
      }];

  var JM = [{
    "name": "Juvenile Myopathy",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.m.wikipedia.org/wiki/Juvenile_dermatomyositis",
    "children": [
      {
        "name": "ND4",
        "parent": "Juvenile Myopathy",
        "color": "#e377c2",
        "lightcolor": "#f7b6d2",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/MT-ND4",
        "children": [
          {
            "name": "chrMT-11084-G",
            "parent": "ND4",
            "color": "#e377c2",
            "lightcolor": "#f7b6d2",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199476113"
          }
          ]
        }
        ]
      }];

  var LD = [{
    "name": "Leigh's Disease",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.m.wikipedia.org/wiki/Leigh_disease#/search",
    "children": [
      {
        "name": "ND4",
        "parent": "Leigh's Disease",
        "color": "#e377c2",
        "lightcolor": "#f7b6d2",
        "type": "gene",
        "link": "https://en.m.wikipedia.org/wiki/MT-ND4",
        "children": [
          {
            "name": "chrMT-11984-C",
            "parent": "ND4",
            "color": "#e377c2",
            "lightcolor": "#f7b6d2",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/200911567"
          }
          ]
        }
        ]
      }];

var COD = [{
    "name": "Cytochrome-c Oxidase Deficiency",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "http://ghr.nlm.nih.gov/condition/cytochrome-c-oxidase-deficiency",
    "children": [
      {
        "name": "COX1",
        "parent": "Cytochrome-c Oxidase Deficiency",
        "color": "#bcbd22",
        "lightcolor": "#dbdb8d",
        "type": "gene",
        "link": "https://en.wikipedia.org/wiki/PTGS1",
        "children": [
          {
            "name": "chrMT-6480-A",
            "parent": "COX1",
            "color": "#bcbd22",
            "lightcolor": "#dbdb8d",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199476128"
          }
          ]
        }
        ]
      }];

var CM = [{
    "name": "Cardiomyopathy",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.wikipedia.org/wiki/Cardiomyopathy",
    "children": [
      {
        "name": "Intergenic",
        "parent": "Cardiomyopathy",
        "color": "#ce6dbd",
        "lightcolor": "#de9ed6",
        "type": "gene",
        "link": "https://en.wikipedia.org/wiki/Intergenic_region",
        "children": [
          {
            "name": "chrMT-12192-A",
            "parent": "Intergenic",
            "color": "#ce6dbd",
            "lightcolor": "#de9ed6",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/3134560"
          }
          ]
        }
        ]
      }];

var SDM = [{
    "name": "Sensorineural Deafness and Migraine",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.wikipedia.org/wiki/Sensorineural_hearing_loss",
    "children": [
      {
        "name": "Intergenic",
        "parent": "Sensorineural Deafness and Migraine",
        "color": "#ce6dbd",
        "lightcolor": "#de9ed6",
        "type": "gene",
        "link": "https://en.wikipedia.org/wiki/Intergenic_region",
        "children": [
          {
            "name": "chrMT-4336-C",
            "parent": "Intergenic",
            "color": "#ce6dbd",
            "lightcolor": "#de9ed6",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/41456348"
          }
          ]
        }
        ]
      }];
var HCM = [{
    "name": "Hypertrophic Cardiomyopathy",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.m.wikipedia.org/wiki/Hypertrophic_cardiomyopathy",
    "children": [
      {
        "name": "Intergenic",
        "parent": "Hypertrophic Cardiomyopathy",
        "color": "#ce6dbd",
        "lightcolor": "#de9ed6",
        "type": "gene",
        "link": "https://en.wikipedia.org/wiki/Intergenic_region",
        "children": [
          {
            "name": "chrMT-4295-G",
            "parent": "Intergenic",
            "color": "#ce6dbd",
            "lightcolor": "#de9ed6",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/121434467"
          }
          ]
        }
        ]
      }];

var SIDS = [{
    "name": "Sudden Infant Death Syndrome",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.wikipedia.org/wiki/Sudden_infant_death_syndrome",
    "children": [
      {
        "name": "Intergenic",
        "parent": "Sudden Infant Death Syndrome",
        "color": "#ce6dbd",
        "lightcolor": "#de9ed6",
        "type": "gene",
        "link": "https://en.wikipedia.org/wiki/Intergenic_region",
        "children": [
          {
            "name": "chrMT-3290-C",
            "parent": "Intergenic",
            "color": "#ce6dbd",
            "lightcolor": "#de9ed6",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199474665"
          }
          ]
        }
        ]
      }];

var OB= [{
    "name": "Obesity",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.wikipedia.org/wiki/Obesity",
    "children": [
      {
        "name": "CYTB",
        "parent": "Obesity",
        "color": '#1f77b4',
        "lightcolor": '#aec7e8',
        "type": "gene",
        "link": "https://en.wikipedia.org/wiki/Cytochrome_b",
        "children": [
          {
            "name": "chrMT-15497-A",
            "parent": "CYTB",
            "color": '#1f77b4',
            "lightcolor": '#aec7e8',
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/199951903"
          }
          ]
        }
        ]
      }];

var DF = [{
    "name": "Deafness",
    "parent": "null",
    "color": "#7f7f7f",
    "lightcolor": "#c7c7c7",
    "type": "disease",
    "link": "https://en.wikipedia.org/wiki/Hearing_loss",
    "children": [
      {
        "name": "Intergenic",
        "parent": "Deafness",
        "color": "#ce6dbd",
        "lightcolor": "#de9ed6",
        "type": "gene",
        "link": "https://en.wikipedia.org/wiki/Intergenic_region",
        "children": [
          {
            "name": "chrMT-961-C,G",
            "parent": "Intergenic",
            "color": "#ce6dbd",
            "lightcolor": "#de9ed6",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/3888511"
          },
          {
            "name": "chrMT-827-G",
            "parent": "Intergenic",
            "color": "#ce6dbd",
            "lightcolor": "#de9ed6",
            "type": "mutation",
            "link": "http://www.ncbi.nlm.nih.gov/snp/28358569"
          }
          ]
        }
        ]
      }];

var selectedDisease = 'BC';
document.getElementById("diseaseDesc").innerHTML = diseaseDescriptionMap[selectedDisease];
var root = BC[0];

function updateBarChart(pop) {

  var margin2 = {top: 50, right: 50, bottom: 50, left: 50},
      width2 = 1080 - margin2.left - margin2.right,
      height2 = 700 - margin2.top - margin2.bottom;

  var tooltip = d3.select('#viz2').append('div')
         .style('position','absolute') //To allow d3 to follow the position absolute to the relationship to the page
         .style('padding','0 10px') //To do padding on the toop tip. 0 on the top and bottom and 10px on each side
         .style('background','white')
         .style('opacity',0); // 0 as we don't want to show when the graphic first loads up

  var x0 = d3.scale.ordinal()
      .rangeRoundBands([0, width2], .1);

  var x1 = d3.scale.ordinal();

  var y = d3.scale.linear()
      .range([height2, 0]);

  var color = d3.scale.ordinal()
      .range(["#8a89a6", "#d0743c"]);

  var xAxis = d3.svg.axis()
      .scale(x0)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickFormat(d3.format(".2s"));


  var svg2 = d3.select("#viz2").append("svg")
      .attr('id', 'viz2SVG')
      .attr("width", width2 + margin2.left + margin2.right)
      .attr("height", height2 + margin2.top + margin2.bottom)
    .append("g")
      .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");
  
  var fname = 'data/' + pop + '.csv'

  d3.csv(fname, function(error, data) {
    var categories = d3.keys(data[0]).filter(function(key) { return key !== "Disease" && key.indexOf('num') == -1; });
    var numbers = d3.keys(data[0]).filter(function(key) { return key.indexOf('num') != -1; });

    data.forEach(function(d) {
      d.percents = categories.map(function(name) { return {name: name, value: +d[name]}; });
      d.numbers = numbers.map(function(name) { tn = name.split('_')[0]; return {"num_name": tn, "num_value": +d[name]}; });
      arr = []
      for (var key in d.numbers) {
        nv = []
        n = d.numbers[key].num_name;
        for (var pkey in d.percents) {
          pn = d.percents[pkey].name;
          if (pn == n) {
            v = d.percents[pkey].value;
            nv.push(v);
            nv.push(d.numbers[key].num_value);
            nv.push(d.Disease);
            arr.push({name: n, value: nv})
            break;
          }
        }
      }
      d.percents = arr;
    });

    x0.domain(data.map(function(d) { return d.Disease; }));
    x1.domain(categories).rangeRoundBands([0, x0.rangeBand()]);
    y.domain([0, d3.max(data, function(d) { return d3.max(d.percents, function(d) { return d.value[0]; }); })]);

    svg2.append("g")
        .attr("id", "xaxis2")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height2 + ")")
        .style("font", "sans-serif")
        .style("font-size","12px")
        .call(xAxis);

    svg2.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .style("font", "sans-serif")
        .style("font-size","12px")
      .append("text")
        .attr('class', 'y label')
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin2.left)
        .attr("x", 0)
        .attr("dy", "0.75em")
        .style("text-anchor", "end")
        .style("font", "sans-serif")
        .style("font-size","12px")
        .text("Percentage of Mutations in Population");

    var disease = svg2.selectAll(".disease")
        .data(data)
      .enter().append("g")
        .attr("class", "g")
        .attr("transform", function(d) { return "translate(" + x0(d.Disease) + ",0)"; })
        .on("click", function(d) {
           selectedDisease = d.Disease;
           var newData = eval(selectedDisease);
           document.getElementById("diseaseDesc").innerHTML = diseaseDescriptionMap[selectedDisease];
           root = newData[0];
           root.children.forEach(collapse);
           update(root);
           document.location.href = "#vizXXXX";
        });

    disease.selectAll("rect")
        .data(function(d) { return d.percents; })
      .enter().append("rect")
        .attr("width", x1.rangeBand())
        .attr("x", function(d) { return x1(d.name); })
        .style("cursor","pointer")
        .style("fill", function(d) { return color(d.name); })
        .on("mouseover", function(d) {
           tooltip.transition()
              .style('opacity', .9);
           tooltip.html(d.value[0] + "% of " + d.value[1])
              .style('left', (d3.event.pageX - 15) + 'px') //position of the tooltip
              .style('top', (d3.event.pageY - 20) + 'px');

           d3.select(this)
              .style('opacity',.5)
        })
        //To reset the color, hence opacity = 1
        .on('mouseout',function(d){
           tooltip.transition().style('opacity', 0)
           d3.select(this)
              .style('opacity',1)
        })
        .attr("y", height2)
        .attr("height", 0)
        .transition().duration(700)
        .delay(function(d, i) {return i*100; })
        .attr("y", function(d) { return y(d.value[0]); })
        .attr("height", function(d) { return height2 - y(d.value[0]); });

    d3.select('#xaxis2')
        .selectAll('.tick')
        .style("cursor","pointer")
        .on('click', function(d) {
           selectedDisease = d;
           var newData = eval(selectedDisease);
           document.getElementById("diseaseDesc").innerHTML = diseaseDescriptionMap[selectedDisease];
           root = newData[0];
           root.children.forEach(collapse);
           update(root);
           document.location.href = "#vizXXXX";
        })
        .on("mouseover", function(d) {
           nd = eval(d)
           tooltip.transition()
              .style('opacity', .9);
           tooltip.html(nd[0].name)
              .style('left', (d3.event.pageX - 30) + 'px') //position of the tooltip
              .style('top', (d3.event.pageY + 20) + 'px');

           d3.select(this)
              .style('opacity',.5)
        })
        //To reset the color, hence opacity = 1
        .on('mouseout',function(d){
           tooltip.transition().style('opacity', 0)
           d3.select(this)
              .style('opacity',1)
        });

    var legend = svg2.selectAll(".legend")
        .data(categories.slice().reverse())
      .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d, i) { return "translate(1," + i * 20 + ")"; })
        .on("mouseover", function(d) {
           tooltip.transition()
              .style('opacity', .9);
           tooltip.html(populationMap[d])
              .style('left', (d3.event.pageX + 15) + 'px') //position of the tooltip
              .style('top', (d3.event.pageY - 25) + 'px');

           d3.select(this)
              .style('opacity',.5)
        })
        //To reset the color, hence opacity = 1
        .on('mouseout',function(d){
           tooltip.transition().style('opacity', 0)
           d3.select(this)
              .style('opacity',1)
        });

    legend.append("rect")
        .attr("x", width2 - 70)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

    legend.append("text")
        .attr("x", width2 - 76)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("font", "sans-serif")
        .style("font-size","12px")
        .style("text-anchor", "end")
        .text(function(d) { return d; });
  });
};

updateBarChart('GBR');
