namespace Core.Utilities.Results
{
    public class SucessDataResult<T> : DataResult<T>
    {
        public SucessDataResult(T data) : base(data, true)
        {
        }

        public SucessDataResult(T data, string message) : base(data, true, message)
        {
        }
        public SucessDataResult(string message) : base(default, true, message)
        {
        }
        public SucessDataResult() : base(default, true)
        {
        }
    }
}