import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { TicketingService } from "./ticketing.service";





@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor( private tservice: TicketingService,) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.tservice.getToken();

        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}
