export interface Cloud {
  id: number;
  provider: string;
}

export class OSCloud implements Cloud {
  provider: "OpenStack";
  username: string;
  password: string;
  tenantName: string;
  tenantId: string;
  region: "RegionOne";
}

export class AWSCloud implements Cloud {
  provider: "AWS";
  accessKey: string;
  accessSecret: string;
  region: "us-east-1";
}
