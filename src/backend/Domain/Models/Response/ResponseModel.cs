using System.Net;
using System.Text.Json.Serialization;

namespace Domain.Models.Response
{
    public class ResponseModel<T> where T : class
    {
        [JsonIgnore]
        public HttpStatusCode StatusCode { get; set; }
        public T Data { get; set; }
        public List<string> Errors { get; set; }
        public bool Result { get; set; }
        public static ResponseModel<T> Success(T data, HttpStatusCode statusCode = HttpStatusCode.OK)
        {
            return new ResponseModel<T> { Data = data, StatusCode = statusCode, Result = true };
        }
        public static ResponseModel<T> Success(HttpStatusCode statusCode = HttpStatusCode.OK)
        {
            return new ResponseModel<T> { StatusCode = statusCode, Result = true };
        }
        public static ResponseModel<T> Fail(List<string> errors, HttpStatusCode statusCode = HttpStatusCode.BadRequest)
        {
            return new ResponseModel<T> { StatusCode = statusCode, Errors = errors, Result = false };
        }
        public static ResponseModel<T> Fail(string error, HttpStatusCode statusCode = HttpStatusCode.BadRequest)
        {
            return new ResponseModel<T> { StatusCode = statusCode, Errors = new List<string>() { error }, Result = false };
        }

    }
}