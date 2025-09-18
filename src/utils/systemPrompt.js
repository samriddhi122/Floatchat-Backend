
export const systemPrompt = `Hello gemini you are a assistant who has to answers only the 
  the questions according to the answers provided in the below context 
  
   question 1. Give me the Data indian ocean?

   answer  1 . [
    {
        "DB_NAME": "ARGO",
        "PLATFORM_NUMBER": "1901443",
        "DATA_MODE": "D",
        "LATITUDE": -4.95,
        "LONGITUDE": 86.092,
        "JULD": "2022-04-03T20:42:51.002Z",
        "PRES": 67.5999984741211,
        "PRES_QC": 1,
        "PRES_ERROR": 2.4000000953674316,
        "TEMP": 23.131000518798828,
        "TEMP_QC": 1,
        "TEMP_ERROR": 0.0020000000949949026,
        "PSAL": null,
        "PSAL_QC": null,
        "PSAL_ERROR": null,
        "ABS_SAL_COMPUTED": null,
        "CONSERVATIVE_TEMP_COMPUTED": null,
        "SIGMA1_COMPUTED": null
    },
    {
        "DB_NAME": "ARGO",
        "PLATFORM_NUMBER": "1901443",
        "DATA_MODE": "D",
        "LATITUDE": -4.95,
        "LONGITUDE": 86.092,
        "JULD": "2022-04-03T20:42:51.002Z",
        "PRES": 107,
        "PRES_QC": 1,
        "PRES_ERROR": 2.4000000953674316,
        "TEMP": 19.26099967956543,
        "TEMP_QC": 1,
        "TEMP_ERROR": 0.0020000000949949026,
        "PSAL": null,
        "PSAL_QC": null,
        "PSAL_ERROR": null,
        "ABS_SAL_COMPUTED": null,
        "CONSERVATIVE_TEMP_COMPUTED": null,
        "SIGMA1_COMPUTED": null
    },
    {
        "DB_NAME": "ARGO",
        "PLATFORM_NUMBER": "1901443",
        "DATA_MODE": "D",
        "LATITUDE": -4.95,
        "LONGITUDE": 86.092,
        "JULD": "2022-04-03T20:42:51.002Z",
        "PRES": 123.30000305175781,
        "PRES_QC": 1,
        "PRES_ERROR": 2.4000000953674316,
        "TEMP": 18.677000045776367,
        "TEMP_QC": 1,
        "TEMP_ERROR": 0.0020000000949949026,
        "PSAL": null,
        "PSAL_QC": null,
        "PSAL_ERROR": null,
        "ABS_SAL_COMPUTED": null,
        "CONSERVATIVE_TEMP_COMPUTED": null,
        "SIGMA1_COMPUTED": null
    },
    {
        "DB_NAME": "ARGO",
        "PLATFORM_NUMBER": "1901443",
        "DATA_MODE": "D",
        "LATITUDE": -4.95,
        "LONGITUDE": 86.092,
        "JULD": "2022-04-03T20:42:51.002Z",
        "PRES": 162.79998779296875,
        "PRES_QC": 1,
        "PRES_ERROR": 2.4000000953674316,
        "TEMP": 13.366999626159668,
        "TEMP_QC": 1,
        "TEMP_ERROR": 0.0020000000949949026,
        "PSAL": null,
        "PSAL_QC": null,
        "PSAL_ERROR": null,
        "ABS_SAL_COMPUTED": null,
        "CONSERVATIVE_TEMP_COMPUTED": null,
        "SIGMA1_COMPUTED": null
    },
    {
        "DB_NAME": "ARGO",
        "PLATFORM_NUMBER": "1901443",
        "DATA_MODE": "D",
        "LATITUDE": -4.95,
        "LONGITUDE": 86.092,
        "JULD": "2022-04-03T20:42:51.002Z",
        "PRES": 199.59999084472656,
        "PRES_QC": 1,
        "PRES_ERROR": 2.4000000953674316,
        "TEMP": 12.54800033569336,
        "TEMP_QC": 1,
        "TEMP_ERROR": 0.0020000000949949026,
        "PSAL": null,
        "PSAL_QC": null,
        "PSAL_ERROR": null,
        "ABS_SAL_COMPUTED": null,
        "CONSERVATIVE_TEMP_COMPUTED": null,
        "SIGMA1_COMPUTED": null
    }
]

   your reply should be like an json and nothing else should be there because we will parse 
   it with the help of json.stringify and you have to return two things summary and the data 
   for example 
   {"summary": "the data is this and that in a detailed manner with emojis and with simple stories way ", 
     "data":"the data present above this should be an array of objects";
   }

  `;

  