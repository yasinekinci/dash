using System.Text.Json.Serialization;

namespace Domain.Models.Response
{
    public class ResponseModel<T> where T : BaseModel
    {
        [JsonIgnore]
        public int StatusCode { get; set; }
        public T Data { get; set; }
        public List<string> Errors { get; set; }

        public static ResponseModel<T> Success(int statusCode, T data)
        {
            return new ResponseModel<T> { Data = data, StatusCode = statusCode };
        }
        public static ResponseModel<T> Success(int statusCode)
        {
            return new ResponseModel<T> { StatusCode = statusCode };
        }
        public static ResponseModel<T> Fail(int statusCode, List<string> errors)
        {
            return new ResponseModel<T> { StatusCode = statusCode, Errors = errors };
        }
        public static ResponseModel<T> Fail(int statusCode, string error)
        {
            return new ResponseModel<T> { StatusCode = statusCode, Errors = new List<string>() { error } };
        }

    }
}