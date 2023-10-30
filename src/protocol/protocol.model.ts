import {Company} from "../company/company.model";

export type Protocol = {
    name: string,
    slug: string,
    logo: string
    primitives: Array<string>,
    website: string,
    company: Company
}