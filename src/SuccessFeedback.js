import FeedbackArray from "./FeedbackArray";

class SuccessFeedback {
  constructor() {
    this.sound = "https://drive.google.com/uc?id=1zcAlo31nPmOlS3Fu1BjbJRJwn1esg-1Z"; //"https://freesound.org/data/previews/173/173000_2193194-lq.mp3";
    this.feedbacks = new FeedbackArray([
      // "https://freesound.org/data/previews/182/182271_84709-lq.mp3",
      // "https://freesound.org/data/previews/33/33276_286533-lq.mp3",
      // "https://freesound.org/data/previews/35/35679_35187-lq.mp3",
      // "https://freesound.org/data/previews/382/382735_954919-lq.mp3",
      // "https://freesound.org/data/previews/219/219456_71257-lq.mp3",
      // "https://freesound.org/data/previews/476/476740_8074450-lq.mp3",
      // "https://freesound.org/data/previews/266/266916_4657534-lq.mp3"
      "https://drive.google.com/uc?id=1G43WrqXqNOYjwXh8WHT5xAWvYJRa4CI1",
      "https://drive.google.com/uc?id=1jhtWr4TodYnAhzz7gz50_ReyHScY1vlO",
      "https://drive.google.com/uc?id=1vmtbs3EM9-BZuVlRSuMFWlrY2YRDRHHk",
      "https://drive.google.com/uc?id=1e_0vCUuzZ1ajIP36rqsfMiKk7pXM7quH",
      "https://drive.google.com/uc?id=1nWIOoMSllEP45kqejzNAPkH3aKex7KAr",
      "https://drive.google.com/uc?id=1MQSNlC3TjrE9mOW3f-M-PVeZlPcAhOCZ",
      "https://drive.google.com/uc?id=1m3-uJ9RFgcqMYyvNdM8gaLdjiEMKPZDD",
      "https://drive.google.com/uc?id=1nZNoRgikzY64TX3eYAlZ-O4RTvX7yWuD",
      "https://drive.google.com/uc?id=1xCWOY_rvZ2EO6cW3n3Oe32B5APeLGIUt",
      "https://drive.google.com/uc?id=1rpzuUwxmP4e_Dvtji0Vz3_j_FPAyxpGW",
      "https://drive.google.com/uc?id=1ztMcIAugHz02K_BdiIPYmpKrdfo6_PPH",
      "https://drive.google.com/uc?id=1zvu-ZPTu6P-SUokQmBOlMR8yLqrdRIdn",
      "https://drive.google.com/uc?id=1bVBz224vXYUMFuz0qliWBFp1zTXeiHOf",
      "https://drive.google.com/uc?id=1VScLw7h4GByS4ic2M_0ERkPhXj5B97nQ",
      "https://drive.google.com/uc?id=1dlcmleUXPPnYnBXPcXahvz_JWwmPfibs",
      "https://drive.google.com/uc?id=1pJIC9Sl-IvSCeZF7adQNYPyawQi8Sl3_",
      "https://drive.google.com/uc?id=1rRnzq7p9TDO3YtFYXvYdyi-KTiHrYx_D",
      "https://drive.google.com/uc?id=1hMfYN9btZQEfy7Zi7g8RhejzJxLTQTxE",
      "https://drive.google.com/uc?id=1w5eMRrcSwLD6OBjVV3y1ebQpVIjTg7Az",
      "https://drive.google.com/uc?id=1moGQznEJdBhMqvNEKjQ7x-m89sq41bFN",
      "https://drive.google.com/uc?id=1_S5mzMladcngxA7_hYAjH3ukZu8H39iv",
      "https://drive.google.com/uc?id=1J97--Q0NAqG5ak1bigydDzMibAjPSgEq",
      "https://drive.google.com/uc?id=12MFOLc_K-LtaWU9EYDhDy6vCnUHS0mpu",
      "https://drive.google.com/uc?id=1kD9KA6NAhSTSk9IhtMhhv_K2p9lwjp4N",
      "https://drive.google.com/uc?id=1wKzTtfd8_FFRenLq6g527oL260DUPug3",
      "https://drive.google.com/uc?id=1K1GnpZ6Rd0kuB2pWGmfaj6uKtUktwHjS",
      "https://drive.google.com/uc?id=1O9jb6KclDHjyVc3ZQQpaoc_7LldEkLUG",
      "https://drive.google.com/uc?id=1y8PMM2RkSRvSNa0gFHII6j4jYzbsqKzw",
      "https://drive.google.com/uc?id=1WWQqC31xoTRD3U9uaZBxerDQCfEd22CL"
    ]);
    this.gaps = [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.gapIndex = 0;
    this.gapCount = 0;
  }

  isVoiceFeedbackRequired() {
    /* Special feedback checking first */
    if (this.gapCount === this.gaps[this.gapIndex]) {
      this.gapIndex++;
      this.gapCount = 0;
      return true;
    } else {
      this.gapCount++;
      return false;
    }
  }

  getSounds() {
    var res = [];
    res.push(this.sound);
    if (this.isVoiceFeedbackRequired()) {
      res.push(
        this.feedbacks.pickRandom()
      );
    }
    return res;
  }
}

export default SuccessFeedback;