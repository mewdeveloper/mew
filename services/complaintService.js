import axios from "axios"
import Config from "react-native-config";

axios.defaults.headers.common['Authorization'] = 'Basic T01TTW9iaWxlQXBwOk0zV09NJDgzMjA=';
class complaintService {

async getComplaintTypes(){
    try{
        return axios.post("https://callcenter2.mew.gov.kw/MEWCallCenterService/api/Complaints/GetIncidentTypes");

        console.warn('new');
        const data= json.map(item => ({ label: item.Description,value:item.Id }));
        return data;
        } catch (error) {
           //console.error(error);
        }

}


async getComplaintSubtypes(type){
         try {
        //    const response = await fetch(
        //      Config.API_URL
        //    );
        //    const json = await response.json();
        const data=[
                                           { label: 'OneS', value: 1 },
                                           { label: 'TwoS', value: 2 },
                                           { label: 'ThreeS', value: 3 }
                                         ];
            return data;
          } catch (error) {
            console.error(error);
          }
    }


}

export default new complaintService();