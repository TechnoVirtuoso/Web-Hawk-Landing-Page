
import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * The shape of the user object returned in the OAuth providers' profile callback,
   * or the second parameter of the session callback, when using a database.
   */
  interface User {
    id?: string;
    companyID?: string;
    companyName?: string;
    companyEmail?: string;
    contactPersonName?: string;
    website?: string;
    role?: string;
  }

  /**
   * Returned by `useSession`, `getSession`, `getServerSession` and received as
   * a prop on the `SessionProvider` React Context.
   */
  interface Session {
    user: User & DefaultSession["user"];
    expires: string;
    token: string;
    sub: string;
    success: boolean;
    code: string;
    message: string;
    data: {
      authToken: string;
      expiresAt: number;
    };
    id: string;
    iat: number;
    exp: number;
    jti: string;
  }

  /**
   * The shape of the account object returned in the OAuth providers' account callback,
   * Usually contains information about the provider being used, like OAuth tokens (e.g., access_token).
   */
  interface Account {}
}

declare module "next-auth/jwt" {
  /**
   * Returned by the jwt callback and session callback, when using JWT sessions
   */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
    /** JWT Token */
    token: string;
    sub: string;
    success: boolean;
    code: string;
    message: string;
    data: {
      token: string;
      expiresAt: number;
      setupComplete: boolean;
    };
    id: string;
    iat: number;
    exp: number;
    jti: string;
  }
}



 enum NotificationType {
  Failure = "failure",
  Success = "success",
  Alert = "alert",
}

interface Contribution {
  dateUploaded: string; // e.g., "Jan 29, 2024"
  name: string; // e.g., "Cherish Nel"
  staffNumber: string; // e.g., "C17407162331"
  salary: number; // e.g., 14088.00
  fivePer: number; // e.g., 748.38
  eighteenPer: number; // e.g., 1348.38
  ssnitNumber: string; // e.g., "C01740900866"
  ghanaNumber: string; // e.g., "GHA-2349040-8878"
}

interface Summary {
  totalFivePer: number; // e.g., 90900.34
  totalEighteenPer: number; // e.g., 90900.34
  totalSalary: number; // e.g., 90900.34
  amountDue: number; // e.g., 100903.90
}

interface PensionContributions {
  title: string; // e.g., "July 2024 - See all your pension contributions"
  contributions: Contribution[];
  summary: Summary;
}