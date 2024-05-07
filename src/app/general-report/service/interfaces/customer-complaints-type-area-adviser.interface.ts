export interface GetCustomerComplaintsByTypeAreaAdviser {
    code:   number;
    status: string;
    data:   Data;
}

export interface Data {
    adviserLackCredibility:                  string;
    adviserUnauthorizedRepairs:              string;
    adviserBadAttention:                     string;
    adviserDidNotOfferMobility:              string;
    adviserTheyDidNotPerformAgreedServices:  string;
    adviserErrorInQuotes:                    string;
    adviserDidNotReceiveFollow:              string;
    adviserDidNotSendBSIquotePolicyContract: string;
    adviserDoNotDeliverPromisedGifts:        string;
    adviserPriceDifferentThanQuoted:         string;
    adviserBadRegistrationCustomerData:      string;
    adviserBadService:                       string;
    adviserDidNotSealPolicy:                 string;
    adviserLackBelongings:                   string;
    $totalAdviser:                           number;
}
