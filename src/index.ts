/**
 * Copyright 2020 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import ILoginInputOptions from "./ILoginInputOptions";
import Session from "./Session";

export async function login(options: ILoginInputOptions): Promise<void> {
  throw new Error("Not implemented.");
}

export async function fetch(
  url: RequestInfo,
  init?: RequestInit
): Promise<Response> {
  throw new Error("Not implemented.");
}

export async function logout(): Promise<void> {
  throw new Error("Not implemented.");
}

export async function getSession(): Promise<Session> {
  throw new Error("Not implemented.");
}

export function onLogin(callback: (session: Session) => unknown): void {
  throw new Error("Not implemented.");
}

export function onLogout(callback: (session: Session) => unknown): void {
  throw new Error("Not implemented.");
}

export async function handleRedirect(url: string): Promise<void> {
  throw new Error("Not implemented.");
}

// Multi User API
export * from "./Session";
export * from "./SessionManager";

// Interfaces
