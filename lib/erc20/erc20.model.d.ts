export declare type TokenInformation = {
    logo: string | null;
    name: string;
    symbol: string;
    address: string;
    decimals: number;
    totalSupply: BigInteger;
    underlyingTokens: Array<TokenInformation>;
};
