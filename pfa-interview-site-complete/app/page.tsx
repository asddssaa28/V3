
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InterviewBookingPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">個人理財大使（PFA）面試預約</h1>
      <Card>
        <CardContent className="space-y-4 p-6">
          <p>
            歡迎申請個人理財大使（PFA）計劃！請於下方選擇一個面試時段進行預約。
            成功預約後，我們將透過電郵通知您具體安排。
          </p>
          <div className="rounded-xl overflow-hidden">
            <iframe
              src="https://calendly.com/zxccxxzz28/30min"
              width="100%"
              height="600"
              frameBorder="0"
              title="PFA Interview Booking"
            ></iframe>
          </div>
          <div className="text-center">
            <Button disabled>請透過上方日曆完成預約</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
