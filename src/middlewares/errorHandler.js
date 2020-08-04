import ErrorResponse from '../utils/error';

const errorHandler = (err, req, res, next) => {
  // Handle http error response
  if (err instanceof ErrorResponse) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
    });
  }

  // handle server side error
  if (process.env.NODE_ENV === 'development') {
    console.log(err);
  }
  res.status(500).json({
    success: false,
    error: 'Server Error',
  });
};

export default errorHandler;
