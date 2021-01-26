package br.com.code.sinqia.resource.exception;


import java.time.Instant;

import javax.servlet.http.HttpServletRequest;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import br.com.code.sinqia.service.exception.AuthorizationException;
import br.com.code.sinqia.service.exception.DataIntegrityException;
import br.com.code.sinqia.service.exception.DatabaseException;
import br.com.code.sinqia.service.exception.ObjectNotFoundException;
import br.com.code.sinqia.service.exception.ResourceNotFoundException;
import br.com.code.sinqia.service.exception.UniqueFieldException;



@RestControllerAdvice
public class ResourceExceptionHandler {

    @ExceptionHandler(ObjectNotFoundException.class)
    public ResponseEntity<StandardError> objectNotFound(ObjectNotFoundException e, HttpServletRequest request) {
        StandardError err = new StandardError(HttpStatus.NOT_FOUND.value(), e.getMessage(), System.currentTimeMillis());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
    }

    @ExceptionHandler(DataIntegrityException.class)
    public ResponseEntity<StandardError> dataIntegrity(DataIntegrityException e, HttpServletRequest request) {
        StandardError err = new StandardError(HttpStatus.BAD_REQUEST.value(), e.getMessage(), System.currentTimeMillis());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<StandardError> validation(MethodArgumentNotValidException e, HttpServletRequest request) {

        ValidationError err = new ValidationError(HttpStatus.BAD_REQUEST.value(), "Erro de validação", System.currentTimeMillis());
        for (FieldError x : e.getBindingResult().getFieldErrors()) {
            err.addError(x.getField(), x.getDefaultMessage());
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err);   
    }
    @ExceptionHandler(ClassCastException.class)
    public ResponseEntity<StandardError> dataIntegrity(ClassCastException e, HttpServletRequest request) {
        StandardError err = new StandardError(HttpStatus.BAD_REQUEST.value(), "Usuário inadequado para esta rota de Login!", System.currentTimeMillis());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err);
    }

    @ExceptionHandler(AuthorizationException.class)
	public ResponseEntity<StandardError> authorization(AuthorizationException e, HttpServletRequest request) {
		StandardError err = new StandardError(HttpStatus.FORBIDDEN.value(), e.getMessage(), System.currentTimeMillis());
		return ResponseEntity.status(HttpStatus.FORBIDDEN).body(err);
	}
    @ExceptionHandler(AuthenticationCredentialsNotFoundException.class)
	public ResponseEntity<StandardError> authorization(AuthenticationCredentialsNotFoundException e, HttpServletRequest request) {
		StandardError err = new StandardError(HttpStatus.FORBIDDEN.value(), "Acesso Negado", System.currentTimeMillis());
		return ResponseEntity.status(HttpStatus.FORBIDDEN).body(err);
	}
 
    @ExceptionHandler(AccessDeniedException.class)
 	public ResponseEntity<StandardError> authorizationAcessAccessDeniedException(AccessDeniedException e, HttpServletRequest request) {
 		StandardError err = new StandardError(HttpStatus.FORBIDDEN.value(), e.getMessage(), System.currentTimeMillis());
 		return ResponseEntity.status(HttpStatus.FORBIDDEN).body(err);
 	} 
    
    @ExceptionHandler(ConstraintViolationException.class)
	public ResponseEntity<StandardError> validation(ConstraintViolationException e, HttpServletRequest request) {
		String erro="O "+e.getConstraintName() + " " + e.getMessage();
		StandardError err = new StandardError(HttpStatus.BAD_REQUEST.value(),e.getMessage(),
					System.currentTimeMillis(), erro);
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err);
	}
    
    @ExceptionHandler(UniqueFieldException.class)
    public ResponseEntity<StandardError> uniqueField(UniqueFieldException e, HttpServletRequest request) {
        StandardError err = new StandardError(HttpStatus.BAD_REQUEST.value(), e.getMessage(), System.currentTimeMillis());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err);
    }
    
    
    @ExceptionHandler(UsernameNotFoundException.class)
	public ResponseEntity<StandardError> authorization(UsernameNotFoundException e, HttpServletRequest request) {
		StandardError err = new StandardError(HttpStatus.FORBIDDEN.value(), "Acesso Negado", System.currentTimeMillis());
		return ResponseEntity.status(HttpStatus.FORBIDDEN).body(err);
	}
    @ExceptionHandler(InternalAuthenticationServiceException.class)
	public ResponseEntity<StandardError> authorization(InternalAuthenticationServiceException e, HttpServletRequest request) {
		StandardError err = new StandardError(HttpStatus.FORBIDDEN.value(), "Acesso Negado", System.currentTimeMillis());
		return ResponseEntity.status(HttpStatus.FORBIDDEN).body(err);
	}
    
	/*
	 * @ExceptionHandler(PagSeguroForbiddenException.class) public
	 * ResponseEntity<StandardError> pagseguroForbiden(PagSeguroForbiddenException
	 * e, HttpServletRequest request) { StandardError err = new
	 * StandardError(HttpStatus.FORBIDDEN.value(), "Acesso Negado: "+ e.getCause(),
	 * System.currentTimeMillis()); return
	 * ResponseEntity.status(HttpStatus.FORBIDDEN).body(err); }
	 * 
	 * @ExceptionHandler(PagSeguroBadRequestException.class) public
	 * ResponseEntity<StandardError>
	 * pagseguroBadRequest(PagSeguroBadRequestException e, HttpServletRequest
	 * request) { StandardError err = new
	 * StandardError(HttpStatus.FORBIDDEN.value(), e.getMessage()+" "+
	 * e.getErrors(), System.currentTimeMillis()); return
	 * ResponseEntity.status(HttpStatus.FORBIDDEN).body(err); }
	 */
    
    @ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<StandardErrorOne> resourceNotFound(ResourceNotFoundException e, HttpServletRequest request) {
		String error = "Resource not found";
		HttpStatus status = HttpStatus.NOT_FOUND;
		StandardErrorOne err = new StandardErrorOne(Instant.now(), status.value(), error, e.getMessage(),
				request.getRequestURI());
		return ResponseEntity.status(status).body(err);

	}

	@ExceptionHandler(DatabaseException.class)
	public ResponseEntity<StandardErrorOne> database(DatabaseException e, HttpServletRequest request) {
		String error = "Database error";
		HttpStatus status = HttpStatus.BAD_REQUEST;
		StandardErrorOne err = new StandardErrorOne(Instant.now(), status.value(), error, e.getMessage(),
				request.getRequestURI());
		return ResponseEntity.status(status).body(err);

	}
	
}


