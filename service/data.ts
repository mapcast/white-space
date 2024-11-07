import axios from "axios";

export async function getHorseDatas(keywords: Map<string, string>) {
  try {
    const urlSearchParams = new URLSearchParams();
    for(const key in keywords) {
      const value = keywords.get(key);
      console.log(key);
      console.log(value);
      if(value) urlSearchParams.append(key, value);
    }
    const response: PageResult<any> = await axios.get(`http://localhost:8090/board/horse`);
    return response;
  } catch(err) {
    console.log(err);
  }
}

export async function getBoardsApi(params: Map<String, String>) {
  const urlSearchParams = new URLSearchParams();
  params.forEach((value, key) => urlSearchParams.append(key.toString(), value.toString()));
  try {
    const response = await axios.get(`/api/board?${urlSearchParams.toString()}`, {responseType: 'json'});
    const data: PageResult<any> = response.data;
    return data;
  } catch(err) {
    console.error(err);
    return null;
  }
}

export async function writeBoardApi(form: any) {
  try {
    const response = await axios.post('/api/board', form, {responseType: 'json'});
    const data: SingleResult<any> = response.data;
    return data;
  } catch(err) {
    console.error(err);
    return null;
  }
}

export async function deleteCommentApi(uuid: string) {
  try {
    const response = await axios.delete(`/api/board/comment/${uuid}`, {responseType: 'json'});
    const data: CommonResult = response.data;
    return data;
  } catch(err) {
    console.error(err);
    return null;
  }
}