import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { from, Observable, throwError, switchMap, map, catchError } from 'rxjs';
import { Signal, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  private tokenSignal: WritableSignal<string> = signal('');

  register(
    email: string,
    password: string,
    fullname: string
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((res) => updateProfile(res.user, { displayName: fullname }));
    return from(promise);
  }
  login(email: string, password: string): Observable<void> {
    return from(
      signInWithEmailAndPassword(this.firebaseAuth, email, password)
    ).pipe(
      // Switch to the inner observable from the token promise
      switchMap((userCredential) =>
        from(userCredential.user.getIdToken()).pipe(
          map((token) => {
            this.setToken(token);
            return;
          })
        )
      ),
      // Handle any errors and propagate them
      catchError((error) => {
        console.error('Login Error:', error);
        return throwError(() => new Error('Login failed')); // Propagate the error
      })
    );
  }

  setToken(token: string) {
    this.tokenSignal.set(token);
  }

  getToken(): string | null {
    return this.tokenSignal();
  }
}
